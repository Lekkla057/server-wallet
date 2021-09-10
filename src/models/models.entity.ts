import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class accout {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  total: number;
}

@Entity()
export class transection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: type;

  @Column()
  accoutId: number;

  @Column()
  price: number;

  @Column()
  dateBy: Date;

  @Column()
  accoutIdFrom: number;
}
export enum type {
  Add = 0,
  TrueMoney = 1,
  Transfer = 2,
  Credit = 3,
}

export class parameterTransectionHistory {
  isAdd: boolean;
}
