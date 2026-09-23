# 🏷️ Preço Fácil

O **Preço Fácil** é um sistema web desenvolvido com o propósito de solucionar um problema real do mundo real: auxiliar pequenos comerciantes, vendedores e empreendedores a calcularem de forma automatizada, rápida e sem erros o **custo unitário** e o **preço de venda ideal** de produtos comercializados em diferentes tipos de embalagens (como fardos, caixas, pacotes ou unidades).

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando uma arquitetura moderna Full-Stack:

### Front-end:
* **React** (com Vite)
* **JavaScript**
* **HTML5 e CSS3** 

### Back-end e Banco de Dados:
* **Node.js** com **Express**
* **Prisma ORM**
* **MongoDB Atlas** (Banco de dados NoSQL hospedado na nuvem)
* **CORS** para comunicação segura entre front-end e back-end

---

## 🎨 Funcionalidades do Sistema
* **Cadastro Inteligente:** Permite definir o nome do produto, tipo de embalagem, quantidade total na embalagem, custo total investido e margem de lucro desejada.
* **Cálculo Automático:** Realiza o dimensionamento do custo unitário e sugere o preço de venda ideal com base no lucro estipulado.
* **Histórico Visual Rápido:** Exibe os últimos produtos calculados em cartões estilizados.
* **Gestão de Registros:** Possibilidade de excluir produtos do banco de dados através de um botão interativo com efeitos visuais modernos (*hover*).
* **Interface Responsiva e Acolhedora:** Design moderno focado na experiência do utilizador.

---

## 📂 Estrutura do Projeto

O sistema está dividido em duas partes principais:
1. **Back-end (API):** Controla as rotas de API (`/produtos`), a conexão com o MongoDB através do Prisma ORM e as operações de CRUD (Criar, Listar, Atualizar e Deletar).
2. **Front-end (Web):** Interface do utilizador dividida em componentes modulares reutilizáveis (`Header`, `Footer`, `Home`).

---

## ⚙️ Como Executar o Projeto

Para executar a aplicação completa localmente no seu computador, siga os passos abaixo:

### Pré-requisitos
Certifique-se de que tem o **Node.js** e o **npm** instalados na sua máquina.

### 1. Clonar o Repositório
Abre o terminal e clona o projeto para a tua máquina:
```bash
git clone https://github.com/ValeriaSilvaSantos1/preco-facil-web.git
cd preco-facil
```

### 2. Configurar e Executar o Back-end (API)

No terminal, entre na pasta correspondente ao back-end do projeto.

Instale as dependências do Node.js:

```bash
npm install
```

Crie um arquivo chamado `.env` na raiz da pasta do back-end e adicione a sua string de conexão do MongoDB Atlas:

```
DATABASE_URL="sua_string_de_conexao_do_mongodb_atlas_aqui"
```

Gere o Prisma Client para configurar o ORM com o banco de dados:

```bash
npx prisma generate
```

Inicie o servidor da API:

```bash
node --watch server.js
```

(O servidor ficará ativo e "escutando" na porta 3000).

### 3. Configurar e Executar o Front-end (Web)

Abra um novo terminal (deixando o do back-end rodando) e navegue até a pasta do projeto web (Front-end).

Instale as dependências do front-end:

```bash
npm install
```

Inicie o ambiente de desenvolvimento do Vite:

```bash
npm run dev
```

Acesse o link gerado no terminal (geralmente http://localhost:5173) através do seu navegador para utilizar a aplicação integrada com o banco de dados.
