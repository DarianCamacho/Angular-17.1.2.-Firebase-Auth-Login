import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexdetailComponent } from './pokedexdetail.component';

describe('PokedexdetailComponent', () => {
  let component: PokedexdetailComponent;
  let fixture: ComponentFixture<PokedexdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokedexdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokedexdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
