import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionHistorialComponent } from './navegacion-historial.component';

describe('NavegacionHistorialComponent', () => {
  let component: NavegacionHistorialComponent;
  let fixture: ComponentFixture<NavegacionHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavegacionHistorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavegacionHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
