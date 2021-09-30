
//Passo 3 -Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), 
//nota de aprovação (number), faltas máximas (number) e uma lista de estudantes
// (um array composto pelos alunos criados no passo 1).

const { criarAlunos } = require("./aluno");
let estudantes = require("./aluno");


//console.log(estudantes);

//console.log(estudantes.listaDeAlunos);

//console.log(estudantes.listaDeAlunos[0].calcularMedia())

let curso={
    nomeDoCurso:"Digital House - CTD",
    notaDeAprovacao:8,
    faltasMaximas:3,
    listaDeEstudandes: estudantes.listaDeAlunos,
    adicionarEstudantes:function(aluno,faltas,notas){
        this.listaDeEstudandes.push(new estudantes.criarAlunos(aluno,faltas,notas))
    },
    aprovacao:function(aluno){
        if((aluno.calcularMedia() >= this.notaDeAprovacao)&&(aluno.faltas < this.faltasMaximas)){
            return true;
        } else if ((aluno.faltas === this.faltasMaximas) && (aluno.calcularMedia() > (1,10 * this.notaDeAprovacao))){
            return true;
        } else {
            return false;
        }
    },
    resultados:function() {
        let lista = [];
        for (let estudante of this.listaDeEstudandes){
           lista.push(this.aprovacao(estudante)) 
        }
        return lista;    
    }

}

// Passo 4 Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos 
//nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade 
//lista de estudantes do objeto curso.

curso.adicionarEstudantes('João',0,[10,9,9,9,8])
//console.log(curso.listaDeEstudandes)

//Passo 5 - Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele 
//aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual 
//ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, 
//tem que estar 10% acima da nota de aprovação.


// console.log(curso.aprovacao(curso.listaDeEstudandes[0]));
// console.log(curso.aprovacao(curso.listaDeEstudandes[1]));
// console.log(curso.aprovacao(curso.listaDeEstudandes[2]));
// console.log(curso.aprovacao(curso.listaDeEstudandes[3]));
// console.log(curso.aprovacao(curso.listaDeEstudandes[4]));
// console.log(curso.aprovacao(curso.listaDeEstudandes[5]));


//calculo media

// console.log(curso.listaDeEstudandes[0].calcularMedia());
// console.log(curso.listaDeEstudandes[1].calcularMedia());
// console.log(curso.listaDeEstudandes[2].calcularMedia());
// console.log(curso.listaDeEstudandes[3].calcularMedia());
// console.log(curso.listaDeEstudandes[4].calcularMedia());
// console.log(curso.listaDeEstudandes[5].calcularMedia());


//Passo 6 - Lista de Resultados 

console.log(curso.resultados());
