import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm"
import { Players } from "./player.entity"

@Entity({
    name: 'clubs'
})

export class Clubs {
    
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({
        type: "varchar",
        length: 32,
        nullable: false
    })
    name: string

    @OneToMany(() => Players, p => p.club)
    players: Players[]

}