import { IRecados, IUsuario } from "../interface/";

export class Usuario implements IUsuario {
  recados: IRecados[];

  constructor(
    public nome: string,
    public cpf: string,
    public email: string,
    public senha: string
  ) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.senha = senha;
    this.recados = [];
  }
}
