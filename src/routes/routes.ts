import { Router } from "express";
import { buscarUsuario, buscarUsuarios, validarUsuario } from "../middleware";
import funcoes from "../service/funcionalidadeUsuarios";

export const router = Router();

router.get("/usuarios", buscarUsuarios, funcoes.listarUsuarios);

router.get("/usuarios/:cpf", buscarUsuario, funcoes.listarUsuario);

router.post("/usuarios", validarUsuario, funcoes.criarUsuario);
