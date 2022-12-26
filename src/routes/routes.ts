import { Router } from "express";
import { listarUsuarios } from "../middleware";
import funcoes from "../service/funcionalidadeUsuarios";

export const router = Router();

router.get("/usuarios", listarUsuarios, funcoes.buscarUsuarios);
