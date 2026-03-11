// Array de objetos com nome e nota dos alunos
const alunos = [
  { nome: "João", nota: 8 },
  { nome: "Maria", nota: 5 },
  { nome: "Carlos", nota: 7 },
  { nome: "Ana", nota: 4 },
  { nome: "Juliana", nota: 9 }
];

// Função que retorna apenas alunos com nota >= 6
const alunosAprovados = (lista) => {
  return lista.filter(aluno => aluno.nota >= 6);
};

// Resultado
const aprovados = alunosAprovados(alunos);

console.log(aprovados);