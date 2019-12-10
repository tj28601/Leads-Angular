import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealDetailContainerComponent } from './deal-detail-container.component';

describe('DealDetailContainerComponent', () => {
  let component: DealDetailContainerComponent;
  let fixture: ComponentFixture<DealDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealDetailContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
