import { v4 } from "uuid";
import { IRecados } from "../interface/IRecado";
import { status } from "../types/tipos";

export class Recado implements IRecados {
  id: string;
  status: status;

  constructor(public descricao: string, public detalhamento: string) {
    this.id = v4();
    this.status = "ativo";
    this.descricao = descricao;
    this.detalhamento = detalhamento;
  }
}
