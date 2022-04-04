import { mount } from '@cypress/vue'
import HelloWorld from '../helloWorld.vue'
import { setActivePinia, createPinia } from 'pinia'
import {useUserStore} from '../../store/UserStore'

beforeEach(() => {
  mount(HelloWorld)
  setActivePinia(createPinia())
})

it('shows component', () => {
  cy.get('[data-cy=helloWorldComp]').should('be.visible')
})


it('renders tailwind', () => {
  cy.get('[data-cy=helloWorldText]').should('have.class', 'text-3xl')
})

it('loads correct store', ()=>{
  
  const user = useUserStore()
  assert.equal('John Doe', user.name)
})