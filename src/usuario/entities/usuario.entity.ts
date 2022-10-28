import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Produto } from "src/produtos/entities/produto.entity"
import { ApiProperty } from "@nestjs/swagger"

@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn() 
    @ApiProperty() 
    id_usuario: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty() 
    nome: string

    @IsEmail()
    @Column({length: 255, nullable: false })
    @ApiProperty() 
    usuario: string

    @IsNotEmpty()
    @MinLength(8)
    @Column({length: 255, nullable: false }) 
    @ApiProperty() 
    senha: string

    @Column({length: 5000 }) 
    @ApiProperty() 
    foto: string

    @ApiProperty({ type: () => Produto}) 
    @OneToMany(() => Produto, (produto) => produto.usuario)
    produto: Produto[]

}