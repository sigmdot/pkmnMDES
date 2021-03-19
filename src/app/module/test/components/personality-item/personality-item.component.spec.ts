import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityItemComponent } from './personality-item.component';

describe('PersonalityItemComponent', () => {
  let component: PersonalityItemComponent;
  let fixture: ComponentFixture<PersonalityItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalityItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
