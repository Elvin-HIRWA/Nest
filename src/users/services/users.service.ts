import { Injectable } from '@nestjs/common';
import { serialize, User } from '../types/User';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
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
}
