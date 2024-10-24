import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingcomponentComponent } from './paintingcomponent.component';

describe('PaintingcomponentComponent', () => {
  let component: PaintingcomponentComponent;
  let fixture: ComponentFixture<PaintingcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaintingcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintingcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
