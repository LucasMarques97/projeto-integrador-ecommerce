import { Controller, Get, Post, Body, Param, Delete, HttpCode, ParseIntPipe, Put, UseGuards } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { HttpStatus } from '@nestjs/common/enums';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { Produto } from './entities/produto.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Produtos')
@UseGuards(JwtAuthGuard)
@Controller('produtos')
@ApiBearerAuth()
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id_produto', ParseIntPipe) id_produto: number): Promise<Produto>{
    return this.produtoService.findById(id_produto);
  }
@Get('/nome/:nome')
@HttpCode(HttpStatus.OK)
findByNome(@Param('nome') nome: string): Promise<Produto[]>{
  return this.produtoService.findByNome(nome);
}
@Post()
@HttpCode(HttpStatus.CREATED)
create(@Body()Produto: Produto): Promise<Produto>{
  return this.produtoService.create(Produto)
}
@Put()
@HttpCode(HttpStatus.OK)
update(@Body()produto: Produto): Promise<Produto>{
  return this.produtoService.update(produto);
}
@Delete('/:id')
@HttpCode(HttpStatus.NO_CONTENT)
delete(@Param('id_produto', ParseIntPipe) id_produto: number){
  return this.produtoService.delete(id_produto);
}
}
