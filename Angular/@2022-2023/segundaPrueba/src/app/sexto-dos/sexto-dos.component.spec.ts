import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SextoDosComponent } from './sexto-dos.component';

describe('SextoDosComponent', () => {
  let component: SextoDosComponent;
  let fixture: ComponentFixture<SextoDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SextoDosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SextoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
