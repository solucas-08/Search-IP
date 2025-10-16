# 🕵️‍♂️ Detecção de IPs Suspeitos - Busca Linear vs Busca Binária

---

## 📘 Descrição

Este projeto foi desenvolvido em **JavaScript** com o objetivo de comparar o desempenho entre **busca linear** e **busca binária** aplicadas a uma lista de IPs suspeitos.

O programa permite:

- ✅ Valida se o formato de um IP digitado é válido  
- ✅ Ordena a lista de IPs  
- ✅ Pesquisa o IP tanto pela busca linear quanto pela binária  
- ✅ Exibe o número de tentativas até o IP ser encontrado (ou não)

---

## 🧠 Objetivos de Aprendizado

- Praticar lógica de programação em **JavaScript**  
- Aplicar conceitos de **estrutura de dados** e **análise de algoritmos**  
- Entender e comparar o desempenho das buscas **O(n)** e **O(log n)**  
- Implementar **validação e tratamento de entradas do usuário**

---

## ⚙️ Tecnologias Utilizadas

- **JavaScript (Node.js)**  
- **readline-sync** (para entrada de dados no terminal)

---

### 🧩 Pré-requisitos
- Node.js (versão 18 ou superior)
- Git (para clonar o repositório)
## 🚀 Como Executar o Projeto

**Clone o repositório:**
```bash
git clone https://github.com/solucas-08/binary-search-ip.git
```

**Acesse a pasta:**
```bash
cd binary-search-ip
```

**Instale a dependência:**
```bash
npm install readline-sync
```

**Execute o programa:**
```bash
node buscar_ip.js
```

---

## 🔍 Funcionamento do Programa

1️⃣ O usuário digita um IP suspeito (ex: `10.1.2.35`)  
2️⃣ O IP é validado para garantir o formato correto  
3️⃣ O algoritmo realiza duas buscas:  
   - **Busca Linear:** percorre a lista do início ao fim  
   - **Busca Binária:** divide a lista ordenada até encontrar o IP  
4️⃣ O programa exibe o número de tentativas (ou informa que o IP não está na lista)

---

## 🧮 Análise de Complexidade de Tempo

Neste projeto, implementamos dois algoritmos de busca para localizar IPs em uma lista: **Busca Linear** e **Busca Binária**.  
A análise de complexidade nos permite entender quanto tempo um algoritmo leva para executar dependendo do tamanho do conjunto de dados.

---

### 🔸 1️⃣ Busca Linear

**Como funciona:** percorre cada elemento da lista, do início até o final, até encontrar o IP alvo.

- **Melhor caso:** o IP está na primeira posição → só 1 verificação → **Ω(1)**  
- **Caso médio:** o IP está no meio → percorre metade da lista → **Θ(n/2) ≈ Θ(n)**  
- **Pior caso:** o IP está na última posição ou não existe → percorre toda a lista → **O(n)**  

🧩 **Observação:** o tempo de execução cresce linearmente com o tamanho da lista.

---

### 🔹 2️⃣ Busca Binária

**Como funciona:** exige que a lista esteja ordenada.  
A cada passo, compara o IP alvo com o elemento do meio da lista, verifica se o IP alvo é maior ou menor do que esse elemento do meio e descarta metade dos elementos restantes.

- **Melhor caso:** o IP está exatamente no meio → encontrado na 1ª tentativa → **Ω(1)**  
- **Caso médio e pior caso:** o número de comparações cresce logaritmicamente → **O(log n)**  

🧩 **Observação:** o tempo de execução cresce muito mais devagar do que na busca linear, tornando a **busca binária muito mais eficiente** para listas grandes.

---

## 💬 Exemplo de Saída

```
Digite o IP suspeito no formato x.x.x.x: 10.1.2.35

O IP 10.1.2.35 foi encontrado na lista de IPs suspeitos após percorrer 13 IPs com a busca linear.
O IP 10.1.2.35 foi encontrado na lista de IPs suspeitos após 5 tentativas com a busca binária.
```

---

## 🧩 Estrutura do Projeto

```
projeto-busca-ips/
│
├── buscar_ip.js        # Código principal do programa
├── package.json        # Dependências e informações do projeto
└── README.md           # Documentação
```

---

## 🧠 Conceitos Envolvidos

- Estruturas de repetição e decisão  
- Funções e modularização  
- Ordenação e comparação de IPs  
- Busca linear e binária  
- Análise de complexidade (**Big O, Ω, Θ**)
