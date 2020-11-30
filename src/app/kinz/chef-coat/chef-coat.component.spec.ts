import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefCoatComponent } from './chef-coat.component';

describe('ChefCoatComponent', () => {
  let component: ChefCoatComponent;
  let fixture: ComponentFixture<ChefCoatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefCoatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefCoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
