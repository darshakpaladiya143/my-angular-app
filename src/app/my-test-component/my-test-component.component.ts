import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-my-test-component',
  template: `<h1 data-cy="test-heading">Hello, Cypress!</h1>
             <button data-cy="test-button" (click)="increment()">Click Me</button>
             <p data-cy="counter">Count: {{ count }}</p>`,
  standalone: true
})
export class MyTestComponent {
  count = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  increment() {
    this.count++;
    this.cdr.detectChanges(); // Manually trigger change detection
  }
}
