// cypress/integration/app_spec.js

import {mount} from "cypress/react18";
import App from "../../src/App";

describe('App Navigation', () => {

    it('should navigate to /sobre page', () => {
        mount(<App/>)
        cy.get('a[href="/sobre"]').click();
        cy.contains('Sobre este projeto');
    });

    it('should navigate to Cars page', () => {
        mount(<App/>)
        cy.get('a[href="/carros"]').click();
        cy.contains('Sua Coleção');
    });

    it('should navigate to Add Car page', () => {
        mount(<App/>)
        cy.get('a[href="/add-carro"]').click();
        cy.contains('Aqui você pode adicionar um carro à sua coleção de HotWheels.');
    });


    it('should display 404 Not Found page', () => {
        mount(<App/>)
        cy.get('a[href="/"]').click();
    });
});
