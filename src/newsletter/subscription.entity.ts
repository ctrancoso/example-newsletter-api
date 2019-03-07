import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class Subscription {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    @Index({ unique: true })
    email: string;

    @Column({ length: 150 })
    firstname: string;

    @Column({ length: 150 })
    lastname: string;

    @Column({ type: 'date' })
    birthdate: Date;

    @Column({ length: 5 })
    zip: string;
}