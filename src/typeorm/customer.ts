import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn({
        type: 'bigint'
    }) id: number;
    @Column({
        nullable: false,
        default: ''
    }) name: string;
    @Column({
        nullable: false,
        default: ''
    }) email: string;
}