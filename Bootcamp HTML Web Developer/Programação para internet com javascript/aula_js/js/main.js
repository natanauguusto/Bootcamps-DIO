
// var nome = "Fulano de Tal";
// var idade = 100;
// var idade2= 10;
// var frase="Japão é o berço ancestral dos samurais."
// // alert(nome +" tem "+idade+" anos.");

// // alert(idade+idade2)//soma
// // idade="100"
// // alert(idade+idade2)//concatena

// //Pelo console
// console.log(nome);
// console.log(idade);
// console.log(frase);
// console.log(frase.toUpperCase());
// console.log(frase.toLowerCase());
// //Array
// var array=["maça","manga","laranja"];
// console.log(array);
// array.push("uva");
// console.log(array);
// array.pop();
// console.log(array);
// console.log(array.length);
// console.log(array.toString());
// console.log(array.join(" - "));
// //Dicionario
// var fruta={
//     nome:"maça",
//     cor:"vermelho"
// }
// console.log(fruta);
// var frutas=[{nome:"maça",cor:"vermelho"},{nome:"banana",cor:"amarelo"}];
// console.log(frutas);


//Laços condicionais
// var idade=prompt("Qual é sua idade");
// if(idade>=18)    alert("Maior de idade");
// else    alert("Menor de idade");

// //Laços de repetição
// var count=0;
// while(count<=5){
//     console.log(count++);    
// }
// for(var i=0;i<=5;i++){
//     console.log(i);
// }

// //Datas
// var Data=new Date();
// console.log(Data.getDate());

// //Funções
// function soma(n1,n2){
//     return n1+n2;
// }
// console.log(soma(5,10));
// function validarIdade(idade){
//     return (idade>=18);
// }
// function maiorIdade(condicional){
//     (condicional)?console.log("Maior de Idade :)"):console.log("Menor de Idade:[");
// }
// var idade=prompt("Qual sua idade:");
// maiorIdade(validarIdade(idade));

// Manipulando elementos
function botaoClicado(Elemento){
    Elemento.innerHTML="Clicou";
    alterarStringElemento("message","Clicado com sucesso >_<");
}
function redirecionar(){
    window.open("https://google.com");
}

function mousePorCima(){
    document.getElementById("message").innerHTML="O mouse está por cima -_-";
}
function alterarStringElemento(ElementoId,String){

    document.getElementById(ElementoId).innerHTML=String;
}
function carregarPagina(){
    console.log("onload");
}
function change(elemento){
    console.log(elemento.value);
}