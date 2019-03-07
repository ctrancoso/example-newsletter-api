import { Module } from '@nestjs/common';

// ORM 
import { TypeOrmModule } from '@nestjs/typeorm';

import { NewsletterService } from './newsletter.service';
import { NewsletterController } from './newsletter.controller';

import { Subscription } from './subscription.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Subscription]),
    ],
    providers: [NewsletterService],
    controllers: [NewsletterController]
})
export class NewsletterModule { }
