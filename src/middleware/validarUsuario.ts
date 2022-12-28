import { NextFunction, Request, Response } from "express";
import { usuarios } from "../data/user.data";
import { IRespostaPadrao } from "../interface";

export const validarUsuario = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { nome, cpf, email, senha, recados } = req.body;

  if (!nome) {
    return res.status(400).json({
      sucess: false,
      message: "Campo Nome é obrigatório.",
    } as IRespostaPadrao);
  }

  if (!cpf) {
    return res.status(400).json({
      sucess: false,
      message: "Campo CPF é obrigatório.",
    } as IRespostaPadrao);
  }

  if (!email) {
    return res.status(400).json({
      sucess: false,
      message: "Campo E-mail é obrigatório.",
    } as IRespostaPadrao);
  }

  if (!senha) {
    return res.status(400).json({
      sucess: false,
      message: "Campo Senha é obrigatório.",
    } as IRespostaPadrao);
  }

  if (!recados) {
    return res.status(400).json({
      sucess: false,
      message: "Campo Recados é obrigatório.",
    } as IRespostaPadrao);
  }

  const usuarioJaCadastrado = usuarios.some((s) => s.cpf === cpf);

  if (usuarioJaCadastrado) {
    return res.status(400).json({
      sucess: false,
      message: "Já existe um usuário cadastrado com o CPF informado.",
    } as IRespostaPadrao);
  }

  next();
};
