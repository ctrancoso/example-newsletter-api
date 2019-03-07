import { Module } from '@nestjs/common';

// ORM
import { TypeOrmModule } from '@nestjs/typeorm';

import { NewsletterModule } from './newsletter/newsletter.module';
import { AuthModule } from './auth/auth.module';

// {
//   type: 'sqlite',
//   database: `../data/db.sqlite`,
//   entities: [__dirname + '/**/*.entity{.ts,.js}'],
//   synchronize: true,
// }

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './data/database.db',
      entities: [ __dirname + '/**/*.entity{.ts,.js}' ],
      synchronize: true,
    }),
    NewsletterModule,
    AuthModule,
  ]
})
export class AppModule {}
