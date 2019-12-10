import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealListContainerComponent } from './deal-list-container.component';

describe('DealListContainerComponent', () => {
  let component: DealListContainerComponent;
  let fixture: ComponentFixture<DealListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
