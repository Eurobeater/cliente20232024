import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloTarjetaComponent } from './articulo-tarjeta.component';

describe('ArticuloTarjetaComponent', () => {
  let component: ArticuloTarjetaComponent;
  let fixture: ComponentFixture<ArticuloTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloTarjetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
