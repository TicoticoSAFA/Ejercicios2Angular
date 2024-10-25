import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteraccionVentana2Component } from './interaccion-ventana2.component';

describe('InteraccionVentana2Component', () => {
  let component: InteraccionVentana2Component;
  let fixture: ComponentFixture<InteraccionVentana2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteraccionVentana2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteraccionVentana2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
