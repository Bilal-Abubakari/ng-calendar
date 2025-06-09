import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCalendarEvent } from './ngx-calendar-event';

describe('NgxCalendarEvent', () => {
  let component: NgxCalendarEvent;
  let fixture: ComponentFixture<NgxCalendarEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxCalendarEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCalendarEvent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
