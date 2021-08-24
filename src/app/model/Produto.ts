 
import { Categoria } from './Categoria';
import { Fornecedor } from './Fornecedor';
import { Venda } from './Venda';

export class Produto{

public id: number;
public nome: string;
public descricao: string;
public imagem: string;
public texto: string;
public preco: number;
public fornecedor: Fornecedor;
public categoria: Categoria;
public venda: Venda[];

}
