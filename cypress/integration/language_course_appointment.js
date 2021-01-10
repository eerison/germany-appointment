describe('Opening page to make an appointment', () => {
    it('Loading page', () => {
        cy.visit('/dienstleistung/324289/en/')
    })

    it("Clicking on Make an Appointment button", () => {
        cy.get('.termin-buchen').click()
    })
})

describe('Opening Book an appointment Page', () => {
    it('Switching to english language', () => {
        cy.contains('English').click()
    })

    it('Clicking on book an appointment button', () => {
        cy.get('#btnTerminBuchen').click()
    })
})

describe('Opening page to put basic information', () => {
    it('Selecting Citizenship', () => {
        cy.get('#cobStaat').select(Cypress.env('FROM_COUNTRY'))
    })

    it(
        'Do you live with a family member (e.g. wife, husband or child), who is a national of: ' +
        '* Belgium, Bulgaria, Denmark, Estonia, Finland, France, Greece, Great Britain, Ireland, Iceland, Italy, ' +
        'Croatia, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Norway, Liechtenstein, Austria, Poland, Portugal, ' +
        'Romania, Sweden, Slovak Republic, Slovenia, Spain, Czech Republic, Hungary or Cyprus ?',() => {
            cy.wait(4000)
            cy
                .get('select[name="cobFamAngInBerlin"]')
                .select(Cypress.env('FM_FROM_UE'), {force: true})
                .should('have.value', Cypress.env('FM_FROM_UE'))
    })

    it('Selecting Request', () => {
        cy.wait(4000)
        cy.get('#cobAnliegen').select(Cypress.env('REQUEST_OPTION'))
    })

    it('Terms and conditions', () => {
        cy.wait(2000)
        cy.get('[type="checkbox"]').check()
    })

    it('Click next button', () => {
        cy.get('#labNextpage').click()
    })
})

describe('Opening personal data page', () => {
    it('Filling form', () => {
        cy.get('#tfFirstName').type(Cypress.env('FIRST_NAME'))

        cy.get('#tfLastName').type(Cypress.env('LAST_NAME'))

        cy.get('select[name="cobGebDatumTag"]').select(Cypress.env('BIRTHDAY_DAY').toString())

        cy.get('select[name="cobGebDatumMonat"]').select(Cypress.env('BIRTHDAY_MONTH').toString())

        cy.get('#tfGebDatumJahr').type(Cypress.env('BIRTHDAY_YEAR'))

        cy.get('select[name="cobVPers"]').select(Cypress.env('NUMBER_OF_APPLICANTS').toString())

        cy.get('#tfMail').type(Cypress.env('EMAIL'))

        cy.get('select[name="cobGenehmigungBereitsVorhanden"]').select(Cypress.env('HAS_RESIDENT_PERMITTED').toString())
    })

    it('Go to next step', () => {
        cy.get('#txtNextpage').click()
    })
})

describe('Date selection page', () => {

    it('Verify first month', () => {
        checkCalendar();
    })

    it('Go to next month', () => {
        cy.get('#labnextMonth').click()
    })

    it('Verify second month', () => {
        checkCalendar();
    })
})

function checkCalendar(){
    cy.screenshot()
    var i;
    const weeks = ['Mo', 'Di', 'Mi', 'Do', 'Fr'];
    for (i = 0; i < 6; i++) {
        weeks.forEach(week => {
            cy.get('#calItem'+week+'_'+i).click()
           /* cy
                .get('[type="checkbox"]')
                .its('length')
                .should('be.gt', 0)
                .then((checkbox) => {
                    cy.log('There are days free')
                    cy.screenshot()
                })*/

        });
    }
}