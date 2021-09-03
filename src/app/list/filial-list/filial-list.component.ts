import { Component, OnInit } from '@angular/core';
import { Filial } from 'src/app/model/Filial';
import { FilialService } from 'src/app/service/filial.service';

@Component({
  selector: 'app-filial-list',
  templateUrl: './filial-list.component.html',
  styleUrls: ['./filial-list.component.css']
})
export class FilialListComponent implements OnInit {

  listaFilial: Filial[];
  idFilial:number;

  constructor(private filialService: FilialService) { }

  ngOnInit() {

    this.findAllFilial()
  }

  findAllFilial(){
    this.filialService.getAllFilial().subscribe((resp: Filial[])=>{
      this.listaFilial = resp
    })
  }

  setIdFilial(idFil:number){
    this.idFilial = idFil
  }

  deletar(){
   this.filialService.deleteFilial(this.idFilial)
   alert('Filial apagada com sucesso!')
  }
 
}
