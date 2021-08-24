import { Component, OnInit } from '@angular/core';
import { Filial } from 'src/app/model/Filial';
import { FilialService } from 'src/app/service/filial.service';

@Component({
  selector: 'app-filial-create',
  templateUrl: './filial-create.component.html',
  styleUrls: ['./filial-create.component.css']
})
export class FilialCreateComponent implements OnInit {

  filial: Filial = new Filial()

  constructor(private filialService: FilialService) { }

  ngOnInit(){
  }

  cadastrar(){
    this.filialService.postFilial(this.filial).subscribe((resp: Filial)=>{
      this.filial = resp;
      alert('Filial cadastrada com sucesso!')
      this.filial = new Filial()
    })
  }

}
