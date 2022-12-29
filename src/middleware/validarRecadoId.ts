import { NextFunction, Request, Response } from "express";
import { IRespostaPadrao } from "../interface";

export const validarRecadoId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { recadoEncontrado } = req.body;

  if (!recadoEncontrado) {
    return res.status(404).json({
      sucess: false,
      message: "Nenhum recado encontrado com o ID informado.",
    } as IRespostaPadrao);
  }

  next();
};
