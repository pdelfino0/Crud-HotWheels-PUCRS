import Sobre from '../../src/pages/Sobre';
import {mount} from "cypress/react18";

describe('Sobre Page', () => {
    it('should render project information', () => {
        mount(<Sobre/>);

        cy.contains('Sobre este projeto').should('be.visible');

        cy.contains('Este é um aplicativo CRUD').should('be.visible');
        cy.contains('O objetivo deste projeto é permitir').should('be.visible');
    });

});
