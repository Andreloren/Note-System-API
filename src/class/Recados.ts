import { v4 } from "uuid";
import { IRecados } from "../interface/IRecado";

export class Recado implements IRecados {
  id: string;
  status!: boolean;

  constructor(public descricao: string, public detalhamento: string) {
    this.id = v4();
    this.descricao = descricao;
    this.detalhamento = detalhamento;
  }
}
