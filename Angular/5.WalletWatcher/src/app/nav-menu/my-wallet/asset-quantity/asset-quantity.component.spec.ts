import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetQuantityComponent } from './asset-quantity.component';

describe('AssetQuantityComponent', () => {
  let component: AssetQuantityComponent;
  let fixture: ComponentFixture<AssetQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetQuantityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssetQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
