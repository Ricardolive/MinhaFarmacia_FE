import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-central-atendimento',
  templateUrl: './central-atendimento.component.html',
  styleUrls: ['./central-atendimento.component.css']
})
export class CentralAtendimentoComponent implements OnInit {

  assunto: string
 
  constructor() { }

  ngOnInit() {
  }

  setAssunto(nome:string){
    this.assunto = nome
  }

  enviar(){
    alert('Email enviado com sucesso!')
  }

}
