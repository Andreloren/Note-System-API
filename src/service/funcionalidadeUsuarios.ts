import { Request, Response } from "express";
import { usuarios } from "../data/user.data";
import { IRespostaPadrao } from "../interface";

class FuncionalidadeUsuarios {
  buscarUsuarios(req: Request, res: Response) {
    res.status(200).json({
      sucess: true,
      message: "Dados encontrados com sucesso",
      data: usuarios,
    } as IRespostaPadrao);
  }
}

const funcoes = new FuncionalidadeUsuarios();

export default funcoes;
