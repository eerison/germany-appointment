describe('Opening Book an appointment Page', () => {
    it('Loading page', () => {
        cy.visit('xima-forms-29/get/14963116144270000')
        cy.screenshot('home-page')
    })

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
        'Romania, Sweden, Slovak Republic, Slovenia, Spain, Czech Republic, Hungary or Cyprus ?', { retries: 10 }, () => {
            cy
                .get('select[name="cobFamAngInBerlin"]')
                .select(Cypress.env('FM_FROM_UE'), {force: true })
                .should('have.value', Cypress.env('FM_FROM_UE'))
    })

    it('Selecting Request', { retries: 10 }, () => {
        cy.get('#cobAnliegen').select(Cypress.env('REQUEST_OPTION'))
    })

    it('Terms and conditions', { retries: 10 }, () => {
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
    var monthPage = 1;

    do {
        it('Verify month page :' + monthPage, () => {

            cy
                .on('fail', (err, runnable) => {
                    return false
                });

            cy
                .get('.CELL > a[link="1"]')
                .click({multiple: true})
                .then(() => {
                    cy.get('#labnextMonth').invoke('removeAttr', 'onClick')
                })

            cy.get('#labnextMonth').click();
        })

        monthPage++;
    } while (monthPage <= 3)

    it('Choose an free time', () => {
        cy
            .get('[type="checkbox"]')
            .each((checkbox) => {
                cy.wrap(checkbox).check()
            })
    })

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