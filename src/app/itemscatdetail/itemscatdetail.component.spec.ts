import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemscatdetailComponent } from './itemscatdetail.component';

describe('ItemscatdetailComponent', () => {
  let component: ItemscatdetailComponent;
  let fixture: ComponentFixture<ItemscatdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemscatdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemscatdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
