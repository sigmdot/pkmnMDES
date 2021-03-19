import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestQuestComponent } from './test-quest.component';

describe('TestQuestComponent', () => {
  let component: TestQuestComponent;
  let fixture: ComponentFixture<TestQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestQuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
