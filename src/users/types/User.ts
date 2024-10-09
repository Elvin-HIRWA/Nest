import { Exclude } from "class-transformer";

export interface User {
    username: string,
    password: string
}

export class serialize {
    username: string;

    @Exclude()
    password: string;

    constructor(partial: Partial<serialize>) {
        Object.assign(this, partial);
    }
}
