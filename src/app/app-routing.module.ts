
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
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { FilialEditComponent } from './edit/filial-edit/filial-edit.component';
import { FornecedorEditComponent } from './edit/fornecedor-edit/fornecedor-edit.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { HomeComponent } from './home/home.component';
import { CategoriaListComponent } from './list/categoria-list/categoria-list.component';
import { FilialListComponent } from './list/filial-list/filial-list.component';
import { FornecedorListComponent } from './list/fornecedor-list/fornecedor-list.component';
import { ProdutoListComponent } from './list/produto-list/produto-list.component';
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
  {path: 'novaCategoria', component: CategoriaCreateComponent},
  {path: 'listaFornecedor', component: FornecedorListComponent},
  {path: 'listaFilial', component: FilialListComponent},
  {path: 'listaCategoria', component: CategoriaListComponent},
  {path: 'listaProduto', component: ProdutoListComponent},
  {path: 'fornecedor-edit/:id', component: FornecedorEditComponent},
  {path: 'filial-edit/:id', component: FilialEditComponent},
  {path: 'categoria-edit/:id', component: CategoriaEditComponent},
  {path: 'produto-edit/:id', component: ProdutoEditComponent}
	

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }



