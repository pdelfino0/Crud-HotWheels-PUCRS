import {mount} from "cypress/react18";
import Home from "../../src/pages/Home";

describe('Home Page', () => {
    beforeEach(() => {
        mount(<Home/>);
    });

    it('should display welcome message', () => {
        cy.contains('Bem-vindo ao CRUD de HotWheels').should('be.visible');
    });

    it('should display project description', () => {
        cy.contains('Aqui você pode gerenciar sua coleção de carros HotWheels').should('be.visible');
        cy.contains('Entenda mais sobre o projeto em si na aba Sobre').should('be.visible');
        cy.contains('adicione carros na aba Adicionar Carro').should('be.visible');
        cy.contains('explore sua coleção na aba Carros').should('be.visible');
    });

});
