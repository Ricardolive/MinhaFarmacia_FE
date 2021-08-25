import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filial } from 'src/app/model/Filial';
import { FilialService } from 'src/app/service/filial.service';

@Component({
  selector: 'app-filial-edit',
  templateUrl: './filial-edit.component.html',
  styleUrls: ['./filial-edit.component.css']
})
export class FilialEditComponent implements OnInit {

  filial: Filial = new Filial()

  constructor(private filialService: FilialService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit(){
    let id = this.route.snapshot.params['id']
    this.findByIdFilial(id)
  }

  findByIdFilial(id:number){
    this.filialService.getByIdFilial(id).subscribe((resp: Filial)=>{
        this.filial = resp
    })
  }

  atualizar(){
    this.filialService.putFilial(this.filial).subscribe((resp: Filial)=>{
      this.filial = resp;
      alert('Filial atualizada com sucesso!')
      this.filial = new Filial()
      this.router.navigate(['/listaFilial'])
    }) 
  }


}
