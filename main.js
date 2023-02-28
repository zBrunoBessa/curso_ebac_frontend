const alunos = [
    { nome: "Bruno", nota: 7.5 },
    { nome: "Leticia", nota: 5.9 },
    { nome: "John", nota: 6.8 },
    { nome: "Paulo", nota: 9.2 },
    { nome: "Amanda", nota: 4.5 }
];

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);

console.log(alunosAprovados);
