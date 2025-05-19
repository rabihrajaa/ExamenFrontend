import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemboursementListComponent } from './remboursement-list.component';

describe('RemboursementListComponent', () => {
  let component: RemboursementListComponent;
  let fixture: ComponentFixture<RemboursementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemboursementListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemboursementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
