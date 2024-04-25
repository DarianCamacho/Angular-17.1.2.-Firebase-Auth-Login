import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemscategoryComponent } from './itemscategory.component';

describe('ItemscategoryComponent', () => {
  let component: ItemscategoryComponent;
  let fixture: ComponentFixture<ItemscategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemscategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemscategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
