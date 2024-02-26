# CRUD de HotWheels

Esse é um projeto da disciplina de Desenvolvimento Front-end do curso de Análise e Desenvolvimento de Sistemas da
Univerdade Católica de Porto Alegre.

O intuito é elaborar um front-end para um CRUD de HotWheels, no qual é possível visualizar, adicionar, editar e excluir
carros.

## Tecnologias utilizadas

- React
- React Router (ferramenta que possibilita o roteamento de páginas)
- Tailwind CSS (framework de CSS)

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

**O projeto estará disponível em [http://localhost:3000](http://localhost:3000)**

## Estrutura de pastas

- **src**: pasta que contém os arquivos do projeto
    - **components**: pasta que contém os componentes do projeto
        - **car-related**: pasta que contém os componentes relacionados aos carros (exceto a página de listagem)
        - **navbar**: pasta que contém o componente da barra de navegação e uma hook que auxilia a trocar o title da
          página atual
        - **footer**: pasta que contém o componente do rodapé
    - **pages**: pasta que contém as páginas do projeto
    - **App.js**: arquivo que contém o componente principal do projeto
    - **index.js**: arquivo que contém a renderização do projeto
    - **tailwind.config.js**: arquivo que contém a configuração do Tailwind CSS
    - **README.md**: arquivo que contém a documentação do projeto (este arquivo)
    - **package.json**: arquivo que contém as dependências do projeto

## Função de cada página

- **Home**: página inicial do projeto
- **Sobre**: página que contém informações sobre o projeto
- **Carros** página onde é possível visualizar os dados já adicionados, bem como edita-los e exclui-los
- **Adicionar Carro**: página onde é possível adicionar um novo carro

## Função de cada componente

- **Navbar**: barra de navegação do projeto
  -usePageTitle: hook que auxilia a trocar o title da página atual
- **Footer**: rodapé do projeto
- **Relacionados aos carros**:
    - **CarCard**: card que contém as informações de um carro, bem como botões para editar e excluir
        - Nesse componente há um formulario escondido que é ativado ao clicar no botão de editar o carro em questão que
          está
          no state definido no App.js
        - Ao clicar no botão de excluir, é excluido o carro do state que está definido no App.js
    - **CarForm**: formulário que é utilizado para adicionar um novo carro ao state que está definido no App.js
        - Esse componente é utilizado na página de adicionar carro
        - Ao clicar no botão de adicionar, é adicionado um novo carro ao state que está definido no App.js
    - **CarInput**: input que é utilizado no CarForm
        - Esse componente é utilizado para a entrada de dados do carro que será adicionado
- **Sobre**: página que contém informações sobre o projeto
- **Home**: página inicial do projeto
- **Carros**: página onde é possível visualizar os dados já adicionados, bem como edita-los e exclui-los
- **AddCarro**: página onde é possível adicionar um novo carro
- **NotFound**: página que é renderizada quando a rota acessada não existe

