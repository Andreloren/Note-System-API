import { NextFunction, Request, Response } from "express";
import { IRespostaPadrao } from "../interface";

export const buscarRecados = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { usuarioEncontrado } = req.body;

  if (!usuarioEncontrado.recados || usuarioEncontrado.recados.length === 0) {
    return res.status(404).json({
      sucess: false,
      message: "Nenhum recado cadastrado para este usuário",
    } as IRespostaPadrao);
  }

  next();
};
