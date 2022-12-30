import { Router } from "express";
import {
  buscarIdRecado,
  buscarRecados,
  buscarUsuario,
  buscarUsuarios,
  validarRecadoId,
  validarRecados,
  validarUsuario,
} from "../middleware";
import funcoes from "../service/funcionalidadeUsuarios";

export const router = Router();

router.post("/usuarios", validarUsuario, funcoes.criarUsuario);

router.post(
  "/usuarios/:cpf/recados",
  [buscarUsuario, validarRecados],
  funcoes.criarRecados
);

router.get("/usuarios", buscarUsuarios, funcoes.listarUsuarios);

router.get("/usuarios/:cpf", buscarUsuario, funcoes.listarUsuarioPorCpf);

router.get(
  "/usuarios/:cpf/recados",
  [buscarUsuario, buscarRecados],
  funcoes.listarRecados
);

router.get(
  "/usuarios/:cpf/recados/:id",
  [buscarUsuario, buscarRecados, buscarIdRecado, validarRecadoId],
  funcoes.listarRecadoPorId
);

router.put(
  "/usuarios/:cpf/recados/:id",
  [buscarUsuario, buscarIdRecado, validarRecadoId],
  funcoes.editarRecado
);

router.delete(
  "/usuarios/:cpf/recados/:id",
  [buscarUsuario, buscarIdRecado, validarRecadoId],
  funcoes.deletarRecado
);
