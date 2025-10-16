const read = require('readline-sync');

let IPssuspeitos = [
    "10.0.0.5", "10.0.1.20", "10.0.2.15", "10.0.3.7", "10.0.4.25",
    "10.0.5.12", "10.0.6.30", "10.0.7.9", "10.0.8.50", "10.0.9.2",
    "10.1.0.7", "10.1.1.10", "10.1.2.35", "10.1.3.12", "10.1.4.25",
    "10.1.5.8", "10.1.6.18", "10.1.7.22", "10.1.8.9", "10.1.9.15",
    "10.2.0.3", "10.2.1.40", "10.2.2.12", "10.2.3.30", "10.2.4.7",
    "10.2.5.14", "10.2.6.9", "10.2.7.20", "10.2.8.8", "10.2.9.28",
    "10.3.0.5", "10.3.1.22", "10.3.2.18", "10.3.3.7", "10.3.4.12",
    "10.3.5.25", "10.3.6.6", "10.3.7.15", "10.3.8.19", "10.3.9.10",
    "10.4.0.1", "10.4.1.14", "10.4.2.20", "10.4.3.5", "10.4.4.12",
    "10.4.5.30", "10.4.6.9", "10.4.7.8", "10.4.8.22", "10.4.9.17"
];

let ip;
let valido;
do {
    ip = read.question("Digite o IP suspeito no formato x.x.x.x: ");
    valido = validarIP(ip);
} while (!valido);

function validarIP(IP){
    let valido = true;
    // checa se é um número ou um ponto através da tabela ascii
    for (let i = 0; i < IP.length; i++){
        let code = IP.charCodeAt(i);
        if (!(code >= 48 && code <= 57) && code !== 46){
            console.log("IP inválido!");
            return false;
        } 
    }
     
    // checa se tem 4 octetos e um tamanho máximo de 255
    let iparr = IP.split(".");
     if (iparr.length !== 4) { 
        console.log("IP inválido!");
        return false
    } 
        for (let i = 0; i < 4; i++){
            if (iparr[i] < 0 || iparr[i] > 255){
                console.log("IP inválido!");
                return false
            }
        }
    
    return true;
}

// Função para comparar cada octeto dos IPs
function compararIPs(a, b){
    let pA = a.split(".").map(Number);
    let pB = b.split(".").map(Number);
    for (i = 0; i < 4; i++){
        if (pA[i] !== pB[i]){
            return pA[i] - pB[i];
        }
    }
    return 0; // Se retornar 0, os IPs são iguais
}

function linearSearch(array, IPalvo){
    let tentativa = 0;

    for (let i = 0; i < array.length; i++){
        tentativa++;
        if (array[i] === IPalvo){
            console.log(`O IP ${IPalvo} foi encontrado na lista de IPs suspeitos após percorrer ${tentativa} IPs com a busca linear`);
            return i;
        } 
    }
    console.log(`O IP ${IPalvo} não foi encontrado após percorrer ${tentativa} IPs`);
    return -1;
}

function binarySearch(array, IPalvo){
    let min = 0;
    let max = array.length - 1;
    let tentativas = 0;
    
    while (min <= max){
        let mid = Math.floor((min + max) / 2);
        tentativas++;

        let comp = compararIPs(array[mid], IPalvo);
        if (comp === 0){
            console.log(`O IP ${IPalvo} foi encontrado na lista de IPs suspeitos após ${tentativas} tentativas com a busca binária`);
            return mid;
        } else if (comp < 0){
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
    console.log(`O IP ${IPalvo} não foi encontrado na lista de IPs suspeitos após ${tentativas} tentativas com a busca binária`);
    return -1;
}

console.log("\n-----------RESULTADOS-------------");
linearSearch(IPssuspeitos, ip);
IPssuspeitos.sort(compararIPs); // ordena o array antes da busca binária
binarySearch(IPssuspeitos, ip);
