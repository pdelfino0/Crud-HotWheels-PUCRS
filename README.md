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
  