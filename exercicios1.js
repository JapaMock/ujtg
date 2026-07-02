// exiba todos os valores armazenados 
let faturamento = [1200,850,980,1500,760,1320,910]
console.log(faturamento);
//informe quantos dias de vendas registrados
console.log(faturamento.length);
//exiba o faturamento do primeiro dia de vendas 
console.log(faturemento[0]);
//exiba do ultimo dia de vendas
console.log(faturamento[faturamento.length - 1]);
//parte 2
//exiba o faturamento total da semana
let soma = 0;

for(let valor of faturamento){
       soma += valor;
    }
//calcule a média de faturamento da semana 
let media = soma / faturamento.length;
//exiba os resultados
console.log(soma);
console.log(media);
//parte3
//utilizando estruturas de repetição e conticionais
//descubra p maior e o menor faturamento da semana
let maior = faturamento[0];
let menor = faturamento[0];
//xeiba esses valores
for(let valor of faturamento){
if(valor > maior){
    maior = valor;
}
if(valor < menor){
    menor = valor;
  }
}
console.log(maior);
console.log(menor);
//vendas acima da média
//crie um novo array  chamada acima da nedia
let acimadaMedia = [];
//armazena  
