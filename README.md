# CRUD de HotWheels

Esse é um projeto da disciplina de Desenvolvimento Front-end do curso de Análise e Desenvolvimento de Sistemas da
Univerdade Católica do Rio Grande do Sul (PUCRS).

O intuito é elaborar um front-end para um CRUD de HotWheels, no qual é possível visualizar, adicionar, editar e excluir
carros.

Uma API foi disponibilizada pela disciplina, a qual foi utilizada para fazer as requisições necessárias para o
funcionamento do projeto.

## Tecnologias utilizadas

- React
- React Router (ferramenta que possibilita o roteamento de páginas)
- Tailwind CSS (framework de CSS)

- Cypress para testar os componentes :new::rocket:
- Axios para fazer requisições para a API :new::rocket:
- Concurrently para rodar a aplicação e a API simultaneamente :new::rocket:

## Rest API :new::rocket:

A API utilizada (Hotwheels-api, código fonte em ``/hotwheels-api``) foi disponibilizada pela disciplina.
Contudo, tive de fazer um endpoint para a rota PUT, que não existia previamente. Rota essa que é utilizada para
atualizar um carro.

## Como rodar o projeto

### Clone o repositório

```bash
git clone git@github.com:pdelfino0/Crud-HotWheels-PUCRS.git
```

### Acesse a pasta do projeto

```bash
cd Crud-HotWheels-PUCRS
```

### Instale as dependências

```bash
npm install
```

### Rode o projeto

```bash
npm start
```

_Esse comando irá rodar não apenas a aplicação, mas também a API._

_Fique a vontade para olhar o script start no package.json_

**O projeto estará disponível em [http://localhost:3000](http://localhost:3000)**

**A API estará disponível em [http://localhost:5000](http://localhost:5000)**

## Estrutura de pastas

- **cypress**: pasta que contém os testes do projeto.
- **hotwheels-api**: pasta que contém a API do projeto.
- **public**: pasta que contém os arquivos públicos do projeto.
- **src**: pasta que contém os arquivos do projeto.
    - **components**: pasta que contém os componentes do projeto.
        - **car-related**: pasta que contém os componentes relacionados aos carros (exceto a página de listagem).
        - **navbar**: pasta que contém o componente da barra de navegação e uma hook que auxilia a trocar o title da
          página atual.
        - **footer**: pasta que contém o componente do rodapé.
    - **hooks**: pasta que contém os hooks do projeto.
    - **pages**: pasta que contém as páginas do projeto.
    - **App.jsx**: arquivo que contém o componente principal do projeto.
    - **index.js**: arquivo que contém a renderização do projeto.
    - **tailwind.config.js**: arquivo que contém a configuração do Tailwind CSS.
    - **README.md**: arquivo que contém a documentação do projeto (este arquivo).
    - **package.json**: arquivo que contém as dependências do projeto.

## Função de cada página

- **Home**: página inicial do projeto.
- **Sobre**: página que contém informações sobre o projeto.
- **Carros** página onde é possível visualizar os dados já adicionados, bem como edita-los e exclui-los.
- **Adicionar Carro**: página onde é possível adicionar um novo carro.
- **NotFound**: página que é renderizada quando a rota acessada não existe.

## Função de cada componente

- **Navbar**: barra de navegação do projeto.
    - usePageTitle: hook que auxilia a trocar o title da página atual.
      :new::rocket:
- useIncrementId: hook que incrementa o id de um carro, muito útil haja visto que não há uma maneira do id's na API.
  serem autoincrementados por não estarmos usando um SGBD.
- **Footer**: rodapé do projeto.
- **Relacionados aos carros**:
    - **CarCard**: card que contém as informações de um carro, bem como botões para editar e excluir.
        - Nesse componente há um formulario escondido que é ativado ao clicar no botão de editar o carro. Esse
          formulário é utilizado para editar as informações do carro, quando o formulário é submetido, é feita uma
          requisição PUT para a API para atualizar o carro e a página é recarregada.
        - Ao clicar no botão de excluir, é feita uma requisição para a API passando o id do carro que será excluído e
          caso a requisição seja bem sucedida, uma mensagem de sucesso é exibida em verde no canto superior direito da
          tela.
    - **CarForm**: formulário que é utilizado para adicionar um novo carro ao state que está definido no App.jsx.
        - Esse componente é utilizado na página de adicionar carro.
        - Ao clicar no botão de adicionar, é feita uma requisição para a API para adicionar um novo carro, caso a
          requisição seja bem sucedida, uma mensagem de sucesso é exibida em verde no canto superior direito da tela.
    - **CarInput**: input que é utilizado no CarForm.
        - Esse componente é utilizado para a entrada de dados do carro que será adicionado.
- **Sobre**: página que contém informações sobre o projeto.
- **Home**: página inicial do projeto.
- **Carros**: página onde é possível visualizar os dados já adicionados, bem como edita-los e exclui-los. Essa página.
  faz requisições para a API para buscar os carros já adicionados. :new::rocket:
- **AddCarro**: página onde é possível adicionar um novo carro. Essa página agora faz requisições para API inserindo um.
  novo carro. :new::rocket:
- **NotFound**: página que é renderizada quando a rota acessada não existe.
