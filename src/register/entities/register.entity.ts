import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Register {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    nombre: string
    @Column()
    apellidoPaterno: string
    @Column()
    apellidoMaterno: string
    @Column()
    correo: string
    @Column()
    telefono: string
    @Column()
    password: string
}
