import { Venda } from "./Venda";

export class Filial{

  public id: number;
  public nome: string;
  public cnpj: string;
  public telefone: string;
  public endereco: string;
  public venda: Venda[];

}