import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Subscription } from './subscription.entity';

@Injectable()
export class NewsletterService {
    constructor(
        @InjectRepository(Subscription)
        private readonly repository: Repository<Subscription>,
    ) { }

    async findAll(): Promise<Subscription[]> {
        return await this.repository.find();
    }

    async findAByEmail(email: string): Promise<Subscription> {
        return await this.repository.findOne({ email : email });
    }

    async create(subscription: Subscription): Promise<Subscription> {
        const entity = await this.repository.create(subscription);
        this.repository.save(entity);
        return entity;
    }

    async delete(id: number): Promise<Subscription> {
        const subscription = await this.repository.findOne(id);
        if(subscription) {
            await this.repository.delete(subscription);
        }
        return subscription;
    }
}
