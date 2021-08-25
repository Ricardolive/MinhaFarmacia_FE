import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

listaProduto: Produto[];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(){

    this.findAllProduto()
  }

  findAllProduto(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[])=>{
      this.listaProduto = resp
    })
  }

}
