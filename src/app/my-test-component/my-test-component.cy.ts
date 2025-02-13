import { mount } from 'cypress/angular';
import { MyTestComponent } from './my-test-component.component';
import { CommonModule } from '@angular/common';

describe('MyTestComponent', () => {
  beforeEach(() => {
    cy.viewport(1280, 720); // Set viewport for better visibility
  });

  it('should display the correct heading', () => {
    mount(MyTestComponent, {
      imports: [CommonModule], // Include CommonModule for basic directives
    });
    cy.get('[data-cy="test-heading"]').should('contain.text', 'Hello, Cypress!');
  });

  it('should increment counter on button click', () => {
    mount(MyTestComponent, {
      imports: [CommonModule],
    });

    // Ensure change detection is triggered after button click
    cy.get('[data-cy="test-button"]').click();

    // You can add a small delay to ensure the change detection cycle runs
    cy.wait(100); // Optional, just to allow the view update to complete

    // Assert that the counter is updated
    cy.get('[data-cy="counter"]').should('contain.text', 'Count: 1');
  });
});
