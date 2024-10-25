import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulacionCookiesComponent } from './manipulacion-cookies.component';

describe('ManipulacionCookiesComponent', () => {
  let component: ManipulacionCookiesComponent;
  let fixture: ComponentFixture<ManipulacionCookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManipulacionCookiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManipulacionCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
