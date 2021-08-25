import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Fornecedor } from 'src/app/model/Fornecedor';
import { Produto } from 'src/app/model/Produto';
import { CategoriaService } from 'src/app/service/categoria.service';
import { FornecedorService } from 'src/app/service/fornecedor.service';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  idFornecedor: number;
  idCategoria: number;
  listaForn: Fornecedor[];
  listaCategorias: Categoria[];
  produto: Produto = new Produto()
  fornecedor: Fornecedor = new Fornecedor()
  categoria: Categoria = new Categoria()

  constructor(private produtoService: ProdutoService,
              private fornecedorService: FornecedorService,
              private categoriaService: CategoriaService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit(){

    let id = this.route.snapshot.params['id']
    this.findByIdProduto(id)

    this.findAllCategoria()
    this.findAllFornecedor()
  }

  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto= resp
    })
  }

 
  findAllFornecedor(){
    this.fornecedorService.getAllFornecedor().subscribe((resp: Fornecedor[])=>{
      this.listaForn = resp
    })
  }

  findAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
      this.listaCategorias = resp
    })
  }

  findByIdFornecedor(){
    this.fornecedorService.getByIdFornecedor(this.idFornecedor).subscribe((resp: Fornecedor)=>{
      this.fornecedor = resp
    })
  }

  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria)=>{
      this.categoria = resp
    })
  }

  atualizar(){

    this.produto.fornecedor = this.fornecedor
    this.produto.categoria = this.categoria
    this.produtoService.putProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp;
      alert('Produto atualizado com sucesso!')
      this.produto = new Produto()
      this.router.navigate(['/listaProduto'])
    })

    
  }

}
