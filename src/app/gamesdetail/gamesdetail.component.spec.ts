import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesdetailComponent } from './gamesdetail.component';

describe('GamesdetailComponent', () => {
  let component: GamesdetailComponent;
  let fixture: ComponentFixture<GamesdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
