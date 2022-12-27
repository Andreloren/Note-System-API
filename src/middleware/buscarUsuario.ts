import { NextFunction, Request, Response } from "express";
import { usuarios } from "../data/user.data";
import { IRespostaPadrao } from "../interface";

export const buscarUsuario = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { cpf } = req.params;

  const usuarioEncontrado = usuarios.find((f) => f.cpf === cpf);

  if (!usuarioEncontrado) {
    return res.status(404).json({
      sucess: false,
      message: "Nenhum usuário encontrado",
    } as IRespostaPadrao);
  }

  req.body = { usuarioEncontrado, ...req.body };

  next();
};
