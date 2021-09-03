import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  listaCategoria: Categoria[]
 
  constructor(public authService:AuthService, private categoriaService: CategoriaService, private router: Router) { }

  ngOnInit(){
    this.findAllCategoria()
 
  }

  findAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp:Categoria[])=>{
      this.listaCategoria = resp
    })
  }

  sair(){
    this.router.navigate(['/home'])
    environment.token = ''
    environment.nome = ''
    environment.tipo = ''
    environment.cpf = ''
    alert('Usuario desconectado!')
  }
 

}
