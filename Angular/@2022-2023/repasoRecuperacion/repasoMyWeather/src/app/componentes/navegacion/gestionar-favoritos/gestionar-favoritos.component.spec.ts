import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarFavoritosComponent } from './gestionar-favoritos.component';

describe('GestionarFavoritosComponent', () => {
  let component: GestionarFavoritosComponent;
  let fixture: ComponentFixture<GestionarFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarFavoritosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
