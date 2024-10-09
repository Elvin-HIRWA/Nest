import { Injectable } from '@nestjs/common';
import { serialize, User } from '../types/User';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from '../dtos/create-user-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) { }

    private users: User[] = [
        {
            "username": "elvin",
            "password": "ttttt"
        },
        {
            "username": "hirwa",
            "password": "ttttt"
        },
        {
            "username": "divin",
            "password": "ttttt"
        },
        {
            "username": "ndoli",
            "password": "ttttt"
        }
    ];


    getUsers() {
        return this.users.map((User) => new serialize(User));
    }

    getUserByName(username: string) {

        return this.users.find((User) => User.username === username)
    }

    createUser(dto: CreateUserDto) {
        const newUser = this.userRepository.create(dto);
        return this.userRepository.save(newUser);
    }
}
