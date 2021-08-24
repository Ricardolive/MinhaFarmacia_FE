import { Component, OnInit } from '@angular/core';
import { Fornecedor } from 'src/app/model/Fornecedor';
import { FornecedorService } from 'src/app/service/fornecedor.service';

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent implements OnInit {

  fornecedor: Fornecedor = new Fornecedor()
 
  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit(){
  }

  cadastrar(){
    this.fornecedorService.postFornecedor(this.fornecedor).subscribe((resp: Fornecedor)=>{
      this.fornecedor = resp;
      alert('Fornecedor cadastrado com sucesso!')
      this.fornecedor = new Fornecedor()
    })
  }

}
