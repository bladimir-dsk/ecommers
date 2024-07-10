import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number
    @Column({nullable: true})
    name: string;
    @Column()
    filename: string;
  
    @Column()
    path: string;
  
    @Column()
    mimetype: string;
  
}
