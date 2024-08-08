import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    PrimerApellido: string
    @Column()
    SegundoApellido: string
    @Column()
    Nombre: string
    @Column()
    genero: string
    @Column()
    Pais: string
    @Column()
    Edad: number
}
