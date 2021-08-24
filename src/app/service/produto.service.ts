import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getAllProduto() : Observable<Produto[]>{
    return this.http.get<Produto[]>('https://minhafarmaciabr.herokuapp.com/produtos')
}

getByIdProduto(id: number): Observable<Produto>{
 return this.http.get<Produto>(`https://minhafarmaciabr.herokuapp.com/produtos/id/${id}`);
}

postProduto(produto: Produto): Observable<Produto>{
     return this.http.post<Produto>('https://minhafarmaciabr.herokuapp.com/produtos', produto)
}

putProduto(produto: Produto): Observable<Produto>{
 return this.http.put<Produto>('https://minhafarmaciabr.herokuapp.com/produtos', produto);
}

deleteProduto(id: number){
 return this.http.delete(`https://minhafarmaciabr.herokuapp.com/produtos/delete/${id}`);
}
 
}
