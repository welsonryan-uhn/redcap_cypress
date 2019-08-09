describe('My Projects', () => {

	before(() => {
		cy.set_user_type('standard')
	})

    it('Should display columns: Project Title, Records, Fields, Instruments, Type, and Status', () => {
		cy.visit_base({url: '?action=myprojects'}).then(() => {                
			cy.get('div').contains('Project Title')
			cy.get('div').contains('Records')
			cy.get('div').contains('Fields')
			cy.get('div').contains('Instrument')    
			cy.get('div').contains('Type')
			cy.get('div').contains('Status')        
		}) 
    })

})