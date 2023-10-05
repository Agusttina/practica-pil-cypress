/// <reference types="cypress" />

describe('test tarea', () => {
    beforeEach(() => {
        cy.visit("https://www.edenentradas.com.ar/")
    })

    it('Verifico que el titulo del buscador diga BUSCAR EVENTO', () => {
        const titulo = "BUSCAR EVENTO"
        cy.get("#buscar").find("h5").should("contain.text", titulo)
    });
})