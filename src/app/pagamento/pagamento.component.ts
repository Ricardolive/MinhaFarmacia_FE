import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  finalizarPedido(){
    alert('Implementação futura')
    this.router.navigate(['/home'])
  }

}
