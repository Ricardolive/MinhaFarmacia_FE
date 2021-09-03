import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  logar(){
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin)=> {
         this.userLogin = resp;

         environment.token = this.userLogin.token;             
         environment.nome = this.userLogin.nome;
         environment.cpf = this.userLogin.cpf;
         environment.tipo = this.userLogin.tipo;	
 
         this.router.navigate(['/home']);
   }, erro => { 
if(erro.status == 500){
   alert('Usuário ou senha incorreto!')
}
      })
}


}
