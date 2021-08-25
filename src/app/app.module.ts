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
import { FornecedorEditComponent } from './edit/fornecedor-edit/fornecedor-edit.component';
import { FornecedorListComponent } from './list/fornecedor-list/fornecedor-list.component';
import { FilialListComponent } from './list/filial-list/filial-list.component';
import { CategoriaListComponent } from './list/categoria-list/categoria-list.component';
import { ProdutoListComponent } from './list/produto-list/produto-list.component';
import { FilialEditComponent } from './edit/filial-edit/filial-edit.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';

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
    FilialCreateComponent,
    FornecedorEditComponent,
    FornecedorListComponent,
    FilialListComponent,
    CategoriaListComponent,
    ProdutoListComponent,
    FilialEditComponent,
    CategoriaEditComponent,
    ProdutoEditComponent
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
