import { NextFunction, Request, Response } from "express";

export const buscarRecadoId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { usuarioEncontrado } = req.body;

  let recadoEncontrado = usuarioEncontrado.recados.find(
    (f: { id: string }) => f.id === id
  );

  req.body = { recadoEncontrado, ...req.body };

  next();
};
