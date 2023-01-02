import { NextFunction, Request, Response } from "express";

export const filtroRecados = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { filter } = req.query;
  const { usuarioEncontrado } = req.body;

  if (filter) {
    return res.json({
      sucess: true,
      data: usuarioEncontrado?.recados
        .filter(
          (f: { descricao: string; detalhamento: string }) =>
            f.descricao
              .toLowerCase()
              .includes(filter.toString().toLowerCase()) ||
            f.detalhamento
              .toLowerCase()
              .includes(filter.toString().toLowerCase())
        )
        .map(
          (m: {
            id: string;
            status: boolean;
            descricao: string;
            detalhamento: string;
          }) => {
            return {
              ID: m.id,
              Status: m.status,
              Descrição: m.descricao,
              Detalhamento: m.detalhamento,
            };
          }
        ),
    });
  }

  next();
};
