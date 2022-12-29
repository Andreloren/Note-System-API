import { Request, Response, Router } from "express";
import {
  buscarUsuario,
  buscarUsuarios,
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

router.get("/usuarios/:cpf", buscarUsuario, funcoes.listarUsuario);

router.get("/usuarios/:cpf/recados");

router.get("/usuarios/:cpf/recados/:id");

router.put("usuarios/:cpf/recados/:id");

router.delete("usuarios/:cpf/recados/:id");
