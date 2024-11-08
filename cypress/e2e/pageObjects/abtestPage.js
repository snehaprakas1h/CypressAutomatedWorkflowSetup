class ABTestPage {
    get abTestHeading(){
        return cy.get('h3');
    }

    get abTestParagraph(){
        return cy.get('p');
    }
}

export default new ABTestPage();