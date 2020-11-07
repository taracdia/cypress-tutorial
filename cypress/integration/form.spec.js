describe("Form test", () => {
    it("Can fill the form", () => {
        cy.visit("/");
        cy.get("form");

        cy.get("input[name='name']")
            .type("Molly")
            .should("have.value", "Molly");

            cy.get('input[name="email"]')
            .type("molly@dev.dev")
            .should("have.value", "molly@dev.dev");
      
          cy.get("textarea")
            .type("Mind you if I ask some silly question?")
            .should("have.value", "Mind you if I ask some silly question?");

        cy.get("form").submit();
        
    });
});