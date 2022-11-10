import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'

@Entity()
export class Notes {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column('title')
  public title?: string

  @Column('text')
  public text?: string
}