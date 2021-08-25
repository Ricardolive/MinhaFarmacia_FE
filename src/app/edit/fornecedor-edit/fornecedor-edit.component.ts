import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from 'src/app/model/Fornecedor';
import { FornecedorService } from 'src/app/service/fornecedor.service';


@Component({
  selector: 'app-fornecedor-edit',
  templateUrl: './fornecedor-edit.component.html',
  styleUrls: ['./fornecedor-edit.component.css']
})
export class FornecedorEditComponent implements OnInit {

  fornecedor: Fornecedor = new Fornecedor()

  constructor(private fornecedorService: FornecedorService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
   
    let id = this.route.snapshot.params['id']
    this.findByIdFornecedor(id)
    
  }

  findByIdFornecedor(id:number){
    this.fornecedorService.getByIdFornecedor(id).subscribe((resp: Fornecedor)=>{
      this.fornecedor = resp
    })
  }

  atualizar(){
    this.fornecedorService.putFornecedor(this.fornecedor).subscribe((resp: Fornecedor)=>{
      this.fornecedor = resp;
      alert('Fornecedor atualizado com sucesso!')
      this.fornecedor = new Fornecedor()
      this.router.navigate(['/listaFornecedor'])
    })
    
  }

  

}
