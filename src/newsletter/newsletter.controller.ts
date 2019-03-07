import { Controller, UseGuards, Post, Body, HttpException, Get, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { validateFields as validator } from 'example-form-validation';

import { Subscription } from './subscription.entity';
import { NewsletterService } from './newsletter.service';

@Controller('newsletter')
@UseGuards(AuthGuard('bearer'))
export class NewsletterController {
    constructor(
        private readonly service: NewsletterService,
    ) { }

    @Post()
    async create(@Body() subscription: Subscription) {
        if (!subscription) {
            return new HttpException('Argument \'subscription\' must be not null.', 500);
        }

        const fields = [];
        for (const key in subscription) {
            if (subscription.hasOwnProperty(key)) {
                const value = subscription[key];
                switch (key) {
                    case 'email':
                        fields.push({
                            value: value,
                            type: 'email'
                        });
                        break;

                    default:
                        fields.push({
                            value: value
                        });
                        break;
                }
            }
        }

        if (!validator(fields)) {
            return new HttpException('Argument \'subscription\' not valid.', 500);
        }

        return await this.service.create(subscription);
    }

    @Get()
    async find(@Query('email') email: string) {
        if (!email) {
            return await this.service.findAll();
        } else {
            return await this.service.findAByEmail(email);
        }
    }
}
