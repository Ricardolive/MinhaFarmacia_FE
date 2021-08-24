import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AppRoutingModule } from './app-routing.module';
import { CentralAtendimentoComponent } from './central-atendimento/central-atendimento.component';
import { CestaComponent } from './cesta/cesta.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FornecedorCreateComponent } from './create/fornecedor-create/fornecedor-create.component';
import { CategoriaCreateComponent } from './create/categoria-create/categoria-create.component';
import { ProdutoCreateComponent } from './create/produto-create/produto-create.component';
import { FilialCreateComponent } from './create/filial-create/filial-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    RodapeComponent,
    CategoriaComponent,
    LoginComponent,
    CadastroComponent,
    CentralAtendimentoComponent,
    CestaComponent,
    FornecedorCreateComponent,
    CategoriaCreateComponent,
    ProdutoCreateComponent,
    FilialCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
