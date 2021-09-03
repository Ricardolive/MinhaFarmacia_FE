import { Component, OnInit } from '@angular/core';
import { Fornecedor } from 'src/app/model/Fornecedor';
import { FornecedorService } from 'src/app/service/fornecedor.service';

@Component({
  selector: 'app-fornecedor-list',
  templateUrl: './fornecedor-list.component.html',
  styleUrls: ['./fornecedor-list.component.css']
})
export class FornecedorListComponent implements OnInit {

  listaForn: Fornecedor[];
  idFornecedor: number;
 
  
  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit(){
    this.findAllFornecedor()
  }

  findAllFornecedor(){
    this.fornecedorService.getAllFornecedor().subscribe((resp: Fornecedor[])=>{
      this.listaForn = resp
    })

  }

  setIdForn(idForn:number){
    this.idFornecedor = idForn
  }

  deletar(){
   this.fornecedorService.deleteFornecedor(this.idFornecedor)
   alert('Fornecedor apagado com sucesso!')
  }

}
