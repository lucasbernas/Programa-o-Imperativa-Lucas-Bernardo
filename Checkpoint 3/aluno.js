// Aluno: Lucas Bernardo Soares - TURMA 01


//Passo 1 -Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e 
//notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

//Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. 
//Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.


function Aluno(aNome,aFaltas,aNotas){
    this.nome = aNome;
    this.faltas = aFaltas;
    this.notas = aNotas;
    this.calcularMedia=function(){
        let soma = 0;
        for (let i=0; i<this.notas.length;i++){
           soma = soma + this.notas[i]; 
        }
        let media = soma/this.notas.length
        return media;
    }
    this.somaFalta=function() {
        this.faltas = this.faltas + 1;
        return this.faltas;
    }                  
}

//const aluno1 = new Aluno('lucas',2,[8,8,9,8]);
//console.log(aluno1)

//console.log(aluno1.calcularMedia());

const aluno1 = new Aluno("Lucas",2,[8,9,10,9,10]);
const aluno2 = new Aluno("João",0,[7,8,10,5,10]);
const aluno3 = new Aluno("Maria",3,[10,10,10,7,4]);
const aluno4 = new Aluno("Any",0,[9,9,8,8,10]);
const aluno5 = new Aluno("Joaquim",4,[5,6,7,8,5]);

let alunos = [aluno1,aluno2,aluno3,aluno4,aluno5];

module.exports= {
    listaDeAlunos: alunos,
    criarAlunos: Aluno
}

