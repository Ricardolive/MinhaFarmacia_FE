import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornecedor } from '../model/Fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor(private http: HttpClient) { }

  getAllFornecedor() : Observable<Fornecedor[]>{
    return this.http.get<Fornecedor[]>('https://minhafarmaciabr.herokuapp.com/fornecedores')
}

getByIdFornecedor(id: number): Observable<Fornecedor>{
 return this.http.get<Fornecedor>(`https://minhafarmaciabr.herokuapp.com/fornecedores/id/${id}`);
}

postFornecedor(fornecedor: Fornecedor): Observable<Fornecedor>{
     return this.http.post<Fornecedor>('https://minhafarmaciabr.herokuapp.com/fornecedores', fornecedor)
}

putFornecedor(fornecedor: Fornecedor): Observable<Fornecedor>{
 return this.http.put<Fornecedor>('https://minhafarmaciabr.herokuapp.com/fornecedores', fornecedor);
}

deleteFornecedor(id: number){
 return this.http.delete(`https://minhafarmaciabr.herokuapp.com/fornecedores/delete/${id}`);
}

}
