import { Usuario } from "../class/Usuario";

export let usuarios: Usuario[] = [
  {
    nome: "João da Silva",
    cpf: "12345678910",
    email: "joao@teste.com",
    senha: "senha123",
    recados: [
      {
        id: "123",
        descricao: "descrição teste",
        detalhamento: "detalhamento teste",
      },
    ],
  },
  {
    nome: "Maria da Silva",
    cpf: "12345678911",
    email: "maria@teste.com",
    senha: "senha123",
    recados: [],
  },
];
