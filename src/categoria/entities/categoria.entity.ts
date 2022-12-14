import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Produto } from "src/produtos/entities/produto.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: "tb_categorias"})
export class Categoria {

    @PrimaryGeneratedColumn() 
    @ApiProperty()    
    id_categoria: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty() 
    moveis: string

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty() 
    ambiente: string

    @ApiProperty({ type: () => Categoria}) 
    @OneToMany(() => Produto, (produto) => produto.categoria)
    produto: Produto[]
}