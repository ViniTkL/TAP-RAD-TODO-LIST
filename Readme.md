# Alunos 
* Antonio Mussato Maciel - RA188914
* Lian Souza Miranda Mendes - RA189251
* Vinicius Santana Azambuja - RA189649 

# API

### O projeto utiliza o banco de dados NoSQL **MongoDB**.

### Configurando o banco de dados

1. Para a API poder salvar e consultar os dados, devemos criar uma database denominada **toDoTasks** na URL: **mongodb://127.0.0.1:27017**

2. Dentro da database **toDoTasks** criaremos a collection **todos** que será onde iremos guardar e salvar os dados das todos criadas na nossa aplicação

3. Também deve ser criardo a collocetion **categories** que será onde iremos guardar as nossas categorias criada


### Utilizando a API


Para utilizar a API primeiro deve se entrar na pasta api utilizando o comando: 
```bash
cd api
```
Agora dentro da pasta api utilize o seguinte comando para baixar as dependências do projeto:
```bash
npm i
```

Para rodar a API utilize o seguinte comando: 
```bash
npm run dev
```
OBS (WINDOWS): Se o terminal do git não rodar a api, por favor utilizar o powershell.