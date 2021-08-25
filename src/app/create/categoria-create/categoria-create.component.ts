import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  categoria: Categoria = new Categoria()

  constructor(private categoriaService: CategoriaService, private router: Router) { }

  ngOnInit(){
  }

  cadastrar(){
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria)=>{
      this.categoria = resp;
      alert('Categoria cadastrada com sucesso!')
      this.categoria = new Categoria()
    })

    this.router.navigate([''])
  }

}
