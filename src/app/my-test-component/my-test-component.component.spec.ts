import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyTestComponent } from './my-test-component.component'; // ✅ Import the correct component

describe('MyTestComponent', () => {
  let component: MyTestComponent;
  let fixture: ComponentFixture<MyTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTestComponent] // ✅ Use 'imports' for standalone components
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.exist;
  });
});
