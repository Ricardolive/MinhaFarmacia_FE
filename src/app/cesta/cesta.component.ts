import { Component, OnInit } from '@angular/core';
import { VendaService } from '../service/venda.service';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {

  quant: number = 1
  produtos: any[]=[]
  frete: number = 1.25
  total:any[]
  dados:any[]
 
  constructor(private vendaService: VendaService) { }

  ngOnInit(){

    this.produtos = this.vendaService.getCesta()
    this.calcFrete() 
    this.calcTotal()
  }

  calcTotal(){
    this.dados =  this.produtos.map(val=> parseFloat( val.preco))
    this.total = this.dados.reduce((tot,atual)=>tot+atual,0)
    
  }

  calcFrete(){
    this.frete*= this.produtos.length
  }
 
  excluir(index:any){
    this.produtos.splice(index,1)
  }

}
