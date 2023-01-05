import { status } from "../types/tipos";

export interface IRecados {
  id: string;
  status: status;
  descricao: string;
  detalhamento: string;
}
