import { Request, Response } from "express";
import { usuarios } from "../data/user.data";
import { IRecados, IRespostaPadrao } from "../interface";
import { v4 as uuid } from "uuid";

class FuncionalidadeUsuarios {
  listarUsuarios(req: Request, res: Response) {
    res.status(200).json({
      sucess: true,
      message: "Dados encontrados com sucesso",
      data: usuarios,
    } as IRespostaPadrao);
  }

  listarUsuario(req: Request, res: Response) {
    const { usuarioEncontrado } = req.body;
    res.status(200).json({
      sucess: true,
      message: "Usuário encontrado com sucesso",
      data: usuarioEncontrado,
    } as IRespostaPadrao);
  }

  criarUsuario(req: Request, res: Response) {
    const { nome, cpf, email, senha, recados } = req.body;

    usuarios.push({
      nome,
      cpf,
      email,
      senha,
      recados,
    });

    return res.status(201).json({
      sucess: true,
      message: "Usuário criado com sucesso!",
      data: nome,
      cpf,
      email,
      senha,
      recados,
    } as IRespostaPadrao);
  }

  criarRecados(req: Request, res: Response) {
    const { descricao, detalhamento, usuarioEncontrado } = req.body;

    const novoRecado: IRecados = {
      id: uuid(),
      descricao,
      detalhamento,
    };

    usuarioEncontrado.recados.push(novoRecado);

    return res.status(201).json({
      sucess: true,
      message: "Recado criado com sucesso!",
      dados: novoRecado,
    } as IRespostaPadrao);
  }
}

const funcoes = new FuncionalidadeUsuarios();

export default funcoes;
