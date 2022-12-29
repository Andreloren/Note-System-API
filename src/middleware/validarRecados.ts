import { NextFunction, Request, Response } from "express";
import { IRespostaPadrao } from "../interface";

export const validarRecados = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { descricao, detalhamento } = req.body;

  if (!descricao) {
    return res.status(400).json({
      sucess: false,
      message: "Campo Descrição é obrigatório.",
    } as IRespostaPadrao);
  }

  if (!detalhamento) {
    return res.status(400).json({
      sucess: false,
      message: "Campo Detalhamento é obrigatório.",
    } as IRespostaPadrao);
  }

  next();
};
