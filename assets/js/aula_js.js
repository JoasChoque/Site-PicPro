console.log("Olá mundo"); //acessa o console do navegador, log = mostrar alguma coisa

//Declarando variavel
let nome = "Testando";
let pessoa = "Jooj";
//ou
const idade = 10; //const vem de constante, uma vez declarada, nao pode ser mudada

////////Tipos de dados

//Numeros inteiros
let numero1 = 30;
let numero2 = 40;
let resultado = numero1 + numero2;

//strings = textos
let primeiroNome = "Jooj";
let segundoNome = "Juuj";

//booleans
let verdadeiro = true;
let falso = false;

//Objetos Array =v
let nomes = ["Jaaj", "Jeej", "Jiij", "Jooj", "Juuj"];
//ou
let nomes2 = [];
nomes2.push("Teste 1");
nomes2.push("Teste 2"); //vai adiocionando valores na array de acordo com a ordem que for colocada

//Objeto
let pessoas = ["Amanda", "0000", "1234"]; //fica complicado adicionar novas pessoas com todos esses dados ai
const amanda = {
  nome: "Amanda",
  telefone: "0000",
  cpf: "1234",
  cidade: "Sp",
}; //se declara objeto com {}
console.log("Meu nome é " + amanda.nome);
console.log("Meu telefone é " + amanda.telefone);
console.log("Meu cpf é" + amanda.cpf);
console.log("Minha cidade é" + amanda.cidade);
/*ou 
let funcionarios= [];
funcionarios.push(
  nome: "Amanda",
  telefone: "0000",
  cpf: "1234",
  cidade: "Sp",
  ) 
    
  ou pegar duas consts e fazer uma nova array, jogando o conteudo das consts nele
*/

////////Imprimindo no console
console.log(resultado);
console.log(idade);
console.log(nome, pessoa);
console.log(nomes[2]);
/////concatenar
//se caso houver int + str, ele nao vai dar erro, ele vai concatenar
console.log(primeiroNome + segundoNome);
