describe('Opening page to make an appointment', () => {
    it('Loading page', () => {
        cy.visit('/dienstleistung/324289/en/')
        cy.screenshot('home-page')
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
            // cy.wait(4000)
            cy
                .get('select[name="cobFamAngInBerlin"]')
                .select(Cypress.env('FM_FROM_UE'), {force: true, timeout: 30000 })
                .should('have.value', Cypress.env('FM_FROM_UE'))
    })

    it('Selecting Request', () => {
        // cy.wait(4000)
        cy.get('#cobAnliegen').select(Cypress.env('REQUEST_OPTION'), { timeout: 30000 })
    })

    it('Terms and conditions', () => {
        cy.get('[type="checkbox"]', { timeout: 30000 }).check()
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
    var nextMonth = true;
    var monthPage = 1;

    do {
        it('Verify month page :' + monthPage, () => {
            if (cy.get('.CELL').find('> a[link="1"]').length > 0) {
                cy.get('.CELL > a[link="1"]').click()
                cy
                    .get('[type="checkbox"]')
                    .check()
                    .then(() => {
                        nextMonth = false;
                    })
            }

            if (!nextMonth) {
                cy.get('#labnextMonth').click();
            }
        })

        monthPage++;
    } while (nextMonth && monthPage < 3)

    it('go to next page', () => {
        cy.get('#txtNextpage').click()
    })
})

describe('Data description page', () => {
    it('Validate Data', () => {
        cy.screenshot('free-days')
    })

    it('Book an appointment', () => {
        cy.log('Click on button!')
    })
})