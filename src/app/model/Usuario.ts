import { Venda } from "./Venda";

export class Usuario{

    public id: number;
    public nome: string;
    public endereco: string;
    public email: string;
    public telefone: string;
    public celular: string;
    public cpf: string;
    public senha: string;
    public tipo: string;
    public venda: Venda[];
}