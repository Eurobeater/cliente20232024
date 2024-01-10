import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoReyesMagosComponent } from './listado-reyes-magos.component';

describe('ListadoReyesMagosComponent', () => {
  let component: ListadoReyesMagosComponent;
  let fixture: ComponentFixture<ListadoReyesMagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoReyesMagosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoReyesMagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
