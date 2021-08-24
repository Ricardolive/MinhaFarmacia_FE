import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venda } from '../model/Venda';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  constructor(private http: HttpClient) { }

  getAllVenda() : Observable<Venda[]>{
    return this.http.get<Venda[]>('https://minhafarmaciabr.herokuapp.com/vendas')
}

getByIdVenda(id: number): Observable<Venda>{
 return this.http.get<Venda>(`https://minhafarmaciabr.herokuapp.com/vendas/id/${id}`);
}

postVenda(venda: Venda): Observable<Venda>{
     return this.http.post<Venda>('https://minhafarmaciabr.herokuapp.com/vendas', venda)
}

putVenda(venda: Venda): Observable<Venda>{
 return this.http.put<Venda>('https://minhafarmaciabr.herokuapp.com/vendas', venda);
}

deleteVenda(id: number){
 return this.http.delete(`https://minhafarmaciabr.herokuapp.com/vendas/delete/${id}`);
}

}
