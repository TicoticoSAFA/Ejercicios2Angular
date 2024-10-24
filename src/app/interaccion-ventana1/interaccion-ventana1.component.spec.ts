import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteraccionVentana1Component } from './interaccion-ventana1.component';

describe('InteraccionVentana1Component', () => {
  let component: InteraccionVentana1Component;
  let fixture: ComponentFixture<InteraccionVentana1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteraccionVentana1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteraccionVentana1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
