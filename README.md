# GoBarber Frontend
Versão frontend do projeto GoBarber, desenvolvido em React JS. :computer: :scissors:

### Executar o Projeto
Primeiro faça um clone desse repositório.(Necessário ter o projeto de backend rodando [GoBarber backend](https://github.com/gabrielhirakawa/go-barber-backend).)
```
git clone https://github.com/gabrielhirakawa/go-barber-frontend.git
ou
git clone git@github.com:gabrielhirakawa/go-barber-frontend.git
```

Dentro da pasta ***src/services*** encontre o arquivo ***api.js*** e altere o endereço de ip do backend para o ip da sua máquina.
```
const api = axios.create({
  baseURL: 'http://192.168.15.21:3333',
});
```

Dentro da pasta raíz rode o código abaixo para instalar as dependências. (Necessário ter Node e Npm instalado)
```
npm install
ou
yarn
```

Por último rode o comando abaixo.
```
npm run start
ou 
yarn start
```
