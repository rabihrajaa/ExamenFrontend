import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemboursementAddComponent } from './remboursement-add.component';

describe('RemboursementAddComponent', () => {
  let component: RemboursementAddComponent;
  let fixture: ComponentFixture<RemboursementAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemboursementAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemboursementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
