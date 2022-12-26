import { NextFunction, Request, Response } from "express";
import { usuarios } from "../data/user.data";
import { IRespostaPadrao } from "../interface";

export const listarUsuarios = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (usuarios.length === 0) {
    return res.status(404).json({
      sucess: false,
      message: "Nenhum usuário localizado",
    } as IRespostaPadrao);
  }

  next();
};
