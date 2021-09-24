import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TertiaireComponent } from './tertiaire.component';

describe('TertiaireComponent', () => {
  let component: TertiaireComponent;
  let fixture: ComponentFixture<TertiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TertiaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TertiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
