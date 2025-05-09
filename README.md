# API Node

API Node.js autenticação JWT e suporte a JSON/XML.

## Funcionalidades

- Autenticação JWT
- Endpoints RESTful
- Suporte a JSON e XML
- Configuração via env variables

## Tecnologias

- Node.js
- Express
- JWT
- XML2JS
- DotEnv
- CORS

## Estrutura do Projeto

```
Test-Node/
├── target-system-test/
│   ├── src/
│   │   ├── config/        # Configurações
│   │   ├── controllers/   # Endpoints
│   │   ├── data/          # Arquivos / dados
│   │   ├── middlewares/   # Middlewares
│   │   ├── routes/        # Rotas
│   │   ├── services/      # Serviços
│   ├── .env               # Variáveis de ambiente
│   ├── .gitignore
│   ├── server.js
│   └── package.json
```

## Pré-requisitos

- Node.js v18+
- npm v9+

## Instalação

```bash
git clone https://github.com/Coppi1/Test-Node.git
cd Test-Node/target-system-test
npm install
```

## Configuração

Crie o arquivo `.env` com o seguinte conteúdo:

```env
PORT=3000
JWT_SECRET=(Chave secreta)
```

## Execução

```bash
# desenvolvimento
npm run dev

# produção
npm start
```

## Endpoints

### Autenticação

**POST** `/api/auth/login`

```json
{
  "username": "admin",
  "password": "admin"
}
```

### Questão 1

**GET** `/api/v1/questions/1`

### Questão 2

**POST** `/api/v1/questions/2`

```json
{
  "number": 21
}
```

### Questão 3

**GET** `/api/v1/questions/3`

### Questão 4

**GET** `/api/v1/questions/4`
