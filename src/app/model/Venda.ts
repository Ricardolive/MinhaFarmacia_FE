import { Filial } from "./Filial";
import { Produto } from "./Produto";
import { Usuario } from "./Usuario";

export class Venda{

    public id: number;
    public  numNota: number;
    public dataEmissao: Date;
    public valorTotal: number;
    public filial: Filial;
    public usuario: Usuario;
    public produto: Produto[];

}