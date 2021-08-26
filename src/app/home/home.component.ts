import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { VendaService } from '../service/venda.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaProdutos: Produto[];

  constructor(private produtoService: ProdutoService, private vendaService:VendaService) { }

  ngOnInit(){

    this.findAllProduto()
  }

  findAllProduto(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[])=>{
      this.listaProdutos = resp
    })
  }

  adicionarCesta(item:any){
    this.vendaService.setCesta(item)

  }

}
