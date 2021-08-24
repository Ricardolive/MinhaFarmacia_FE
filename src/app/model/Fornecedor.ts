import { Produto } from "./Produto";

export class Fornecedor{

    public id: number;
    public nome: string;
    public cnpj: string;
    public endereco: string;
    public telefone: string;
    public produto: Produto[];
}