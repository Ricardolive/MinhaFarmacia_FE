
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CentralAtendimentoComponent } from './central-atendimento/central-atendimento.component';
import { CestaComponent } from './cesta/cesta.component';
import { CategoriaCreateComponent } from './create/categoria-create/categoria-create.component';
import { FilialCreateComponent } from './create/filial-create/filial-create.component';
import { FornecedorCreateComponent } from './create/fornecedor-create/fornecedor-create.component';
import { ProdutoCreateComponent } from './create/produto-create/produto-create.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'centralAtendimento', component: CentralAtendimentoComponent},
  {path: 'cesta', component: CestaComponent},
  {path: 'novoFornecedor', component: FornecedorCreateComponent},
  {path: 'novoProduto', component: ProdutoCreateComponent},
  {path: 'novaFilial', component: FilialCreateComponent},
  {path: 'novaCategoria', component: CategoriaCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }



