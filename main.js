const alunos = [
    { nome: 'Aline', nota: 9 },
    { nome: 'Pedro', nota: 5 },
    { nome: 'Leticia', nota: 7 },
    { nome: 'Bruno', nota: 6 },
    { nome: 'Jorge', nota: 8 }
]
function notas() {
    for (let i = 0; i < alunos.length; i++) {
        if(alunos[i].nota >= 6) {
            console.log('aluno '+alunos[i].nome + ' passou com nota: ' + alunos[i].nota)
        }
    }
}
notas();
