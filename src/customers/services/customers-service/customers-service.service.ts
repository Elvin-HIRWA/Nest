import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersServiceService {
    users = [
        {
            id: 1,
            email: "elvin.h@gmail.com",
            createdAt: new Date()
        },
        {
            id: 2,
            email: "elhirwa@gmail.com",
            createdAt: new Date()
        },
        {
            id: 3,
            email: "elhirwahirwandoli@gmail.com",
            createdAt: new Date()
        },
    ];


    findCustomer(id:number) {
        return this.users.find((user) => user.id == id);
    }
}
