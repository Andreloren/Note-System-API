import { NextFunction, Request, Response } from "express";

export const buscarIdRecado = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { usuarioEncontrado } = req.body;

  const recadoEncontrado = usuarioEncontrado.recados.find(
    (f: { id: string }) => f.id === id
  );

  req.body = { recadoEncontrado, ...req.body };

  next();
};
