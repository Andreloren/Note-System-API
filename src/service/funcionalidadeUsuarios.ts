import { Request, Response } from "express";
import { usuarios } from "../data/user.data";
import { IRecados, IRespostaPadrao } from "../interface";
import { v4 as uuid } from "uuid";

class FuncionalidadeUsuarios {
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
  listarUsuarios(req: Request, res: Response) {
    res.status(200).json({
      sucess: true,
      message: "Dados encontrados com sucesso",
      data: usuarios,
    } as IRespostaPadrao);
  }

  listarUsuarioPorCpf(req: Request, res: Response) {
    const { usuarioEncontrado } = req.body;
    res.status(200).json({
      sucess: true,
      message: "Usuário encontrado com sucesso",
      data: usuarioEncontrado,
    } as IRespostaPadrao);
  }

  criarRecados(req: Request, res: Response) {
    const { descricao, detalhamento, usuarioEncontrado } = req.body;

    const novoRecado: IRecados = {
      id: uuid(),
      status: "ativo",
      detalhamento,
      descricao,
    };

    if (usuarioEncontrado) {
      usuarioEncontrado.recados.push(novoRecado);
    }

    return res.status(201).json({
      sucess: true,
      message: "Recado criado com sucesso!",
      data: novoRecado,
    } as IRespostaPadrao);
  }

  listarRecados(req: Request, res: Response) {
    const { usuarioEncontrado } = req.body;

    return res.status(200).json({
      sucess: true,
      message: "Recados do usuário listados com sucesso!",
      data: usuarioEncontrado.recados,
    } as IRespostaPadrao);
  }

  listarRecadoPorId(req: Request, res: Response) {
    const { recadoEncontrado } = req.body;

    return res.status(200).json({
      sucess: true,
      message: "Recado encontrado com sucesso.",
      data: recadoEncontrado,
    } as IRespostaPadrao);
  }

  atualizarUsuario(req: Request, res: Response) {
    const { novasInfosUsuario, usuarioEncontrado } = req.body;

    usuarioEncontrado.recados = novasInfosUsuario;

    return res.status(201).json({
      sucess: true,
      message: "Recados do usuário atualizado com sucesso",
      data: usuarioEncontrado,
    } as IRespostaPadrao);
  }

  editarRecado(req: Request, res: Response) {
    const { descricao, detalhamento, status, recadoEncontrado } = req.body;

    if (!descricao && !detalhamento && !status) return res.status(304).json();

    if (descricao) recadoEncontrado.descricao = descricao;
    if (detalhamento) recadoEncontrado.detalhamento = detalhamento;
    if (status) recadoEncontrado.status = status;

    return res.status(200).json({
      sucess: true,
      message: "Recado atualizado com sucesso",
      data: {
        status: recadoEncontrado.status,
        detalhamento: recadoEncontrado.detalhamento,
        descricao: recadoEncontrado.descricao,
      },
    } as IRespostaPadrao);
  }

  deletarRecado(req: Request, res: Response) {
    const { id } = req.params;
    const { usuarioEncontrado } = req.body;

    const index = usuarioEncontrado.recados.findIndex(
      (f: { id: string }) => f.id === id
    );

    const recadoExcluido = usuarioEncontrado.recados[index];

    usuarioEncontrado.recados.splice(index, 1);

    return res.status(200).json({
      sucess: true,
      message: "Recado excluído com sucesso",
      data: {
        id: recadoExcluido.id,
        status: recadoExcluido.status,
        detalhamento: recadoExcluido.detalhamento,
        descricao: recadoExcluido.descricao,
      },
    } as IRespostaPadrao);
  }
}

const funcoes = new FuncionalidadeUsuarios();

export default funcoes;
