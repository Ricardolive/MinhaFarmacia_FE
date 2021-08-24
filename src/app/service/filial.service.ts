import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filial } from '../model/Filial';

@Injectable({
  providedIn: 'root'
})
export class FilialService {

  constructor(private http: HttpClient) { }

  getAllFilial() : Observable<Filial[]>{
    return this.http.get<Filial[]>('https://minhafarmaciabr.herokuapp.com/filiais')
}

getByIdFilial(id: number): Observable<Filial>{
 return this.http.get<Filial>(`https://minhafarmaciabr.herokuapp.com/filiais/id/${id}`);
}

postFilial(filial: Filial): Observable<Filial>{
     return this.http.post<Filial>('https://minhafarmaciabr.herokuapp.com/filiais', filial)
}

putFilial(filial: Filial): Observable<Filial>{
 return this.http.put<Filial>('https://minhafarmaciabr.herokuapp.com/filiais', filial);
}

deleteFilial(id: number){
 return this.http.delete(`https://minhafarmaciabr.herokuapp.com/filiais/delete/${id}`);
}

}
