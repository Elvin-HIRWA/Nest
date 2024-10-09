import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';

@Module({
  imports: [CustomersModule, UsersModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 33980,
    username: 'user',
    password: 'password',
    database: 'nest',
    entities: entities,
    synchronize: true,
  })],
  controllers: [],
  providers: [],
})
export class AppModule { }
