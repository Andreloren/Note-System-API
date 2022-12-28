import { Request, Response } from "express";
import { usuarios } from "../data/user.data";
import { IRespostaPadrao } from "../interface";

class FuncionalidadeUsuarios {
  listarUsuarios(req: Request, res: Response) {
    res.status(200).json({
      sucess: true,
      message: "Dados encontrados com sucesso",
      data: usuarios.map((u) => {
        return {
          Nome: u.nome,
          CPF: u.cpf,
          Email: u.email,
          Senha: u.senha,
        };
      }),
    } as IRespostaPadrao);
  }

  listarUsuario(req: Request, res: Response) {
    const { usuarioEncontrado } = req.body;
    res.status(200).json({
      sucess: true,
      message: "Usuário encontrado com sucesso",
      data: {
        Nome: usuarioEncontrado.nome,
        CPF: usuarioEncontrado.cpf,
        Email: usuarioEncontrado.email,
        Senha: usuarioEncontrado.senha,
      },
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
}

const funcoes = new FuncionalidadeUsuarios();

export default funcoes;
