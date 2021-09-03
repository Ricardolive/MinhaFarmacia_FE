import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../model/Fornecedor';
import { Produto } from '../model/Produto';
import { FornecedorService } from '../service/fornecedor.service';
import { ProdutoService } from '../service/produto.service';
import { VendaService } from '../service/venda.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  listaFornecedor: Fornecedor[]
  listaProdutos: Produto[]
  listaFiltro: Produto[]

  constructor(private fornecedorService: FornecedorService,
              private produtoService: ProdutoService,
              private vendaService: VendaService) { }

  ngOnInit(){

    this.findAllFornecedor()  
    this.findAllProduto()

  }

  findAllFornecedor(){
    this.fornecedorService.getAllFornecedor().subscribe((resp: Fornecedor[])=>{
      this.listaFornecedor = resp
    })
  }

  findAllProduto(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[])=>{
      this.listaProdutos = resp
    })
  }

  filtroMarca(marca:string){

     let filtro = this.listaProdutos.filter(resp=> resp.fornecedor.nome == marca) 
 
      this.listaFiltro = filtro
  }

  filtroDesconto(){
    alert('Implementação futura')
  }

  tirarFiltros(){
    this.listaFiltro = this.listaProdutos
  }

  adicionarCesta(prod: Produto){
     this.vendaService.setCesta(prod)
     alert('Produto adicionado a cesta!')
  }

   
}
