import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  listaCategoria: Categoria[];
  idCategoria: number;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(){

    this.findAllCategoria()
  }

  findAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
      this.listaCategoria = resp
    })

  }

  setIdCategoria(idCat:number){
    this.idCategoria = idCat
  }

  deletar(){
   this.categoriaService.deleteCategoria(this.idCategoria)
   alert('Categoria apagada com sucesso!')
  }

}
