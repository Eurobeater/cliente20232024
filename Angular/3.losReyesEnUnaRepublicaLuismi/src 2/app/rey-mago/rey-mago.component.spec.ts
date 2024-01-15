import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReyMagoComponent } from './rey-mago.component';

describe('ReyMagoComponent', () => {
  let component: ReyMagoComponent;
  let fixture: ComponentFixture<ReyMagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReyMagoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReyMagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
