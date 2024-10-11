import { Injectable } from '@nestjs/common';
import { serialize, User } from '../types/User';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from '../dtos/create-user-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>) { }

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
        return this.userRepository.find()
        // map((User) => new serialize(User));
    }

    getUserByName(id: number): Promise<UserEntity | null> {
        return this.userRepository.findOneBy({ id });
        // (User) => User.username === username)
    }

    createUser(dto: CreateUserDto) {
        // const newUser = this.userRepository.create(dto);
        // console.log(newUser.name);

        return this.userRepository.save(//newUser
            {
                "name": dto.name,
                "email": dto.email,
                "password": dto.password
            }
        );
    }
}
