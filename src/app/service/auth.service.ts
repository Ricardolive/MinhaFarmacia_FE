import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://minhafarmaciabr.herokuapp.com/usuarios/logar', userLogin);
  }


cadastrar(user: Usuario): Observable<Usuario>{
return this.http.post<Usuario>('https://minhafarmaciabr.herokuapp.com/usuarios/cadastrar', user);
}

logado(){
 let ok: boolean = false;

    if(environment.token != ''){
        ok= true
    }
    return ok;
}

admin(){
  let ok: boolean = false;

    if(environment.tipo == 'adm'){
        ok= true
    }
    return ok;
}
}
