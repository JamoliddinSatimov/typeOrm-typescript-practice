import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Clubs } from './club.entity'

@Entity({
    name: "players"
})

export class Players {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({
        type: "varchar",
        length: 32,
        nullable: false
    })
    name: string

    @ManyToOne(() => Clubs, c => c.players)
    club: Clubs
}