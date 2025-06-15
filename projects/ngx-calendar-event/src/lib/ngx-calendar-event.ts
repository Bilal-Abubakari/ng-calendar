import { Component } from "@angular/core";

interface CalendarDay {
  dayNumber: number;
  dayName: string;
  date: string;
}

interface CalendarEvent {
  name: string;
  typeClass: string; // e.g., 'event-approved', 'event-pending'
  startColumn: number;
  endColumn: number;
  span: number;
}
interface ICalendarEvent {
  name: string;
  date: string;
  value: number;
}
@Component({
  selector: "ngx-calendar-event",
  templateUrl: "./ngx-calendar-event.html",
  styleUrls: ["./ngx-calendar-event.scss"],
  // If this is intended to be a standalone component, add standalone: true
  // and ensure necessary dependencies are in an 'imports' array.
  // Otherwise, remove the 'imports' property if it was there.
})
export class NgxCalendarEvent {
  currentView: "month" | "week" = "month";
  currentDate: Date = new Date(2025, 5, 1); // June 2025

  oliviaEvent: CalendarEvent = {
    name: "Annual Leave",
    typeClass: "event-approved",
    startColumn: 3,
    endColumn: 9,
    span: 6, // endColumn - startColumn
  };

  bilalEvent: ICalendarEvent = {
    name: "Annual Leave",
    date: this.currentDate.toISOString(),
    value: 1,
  };

  johnEvent: CalendarEvent = {
    name: "Conference",
    typeClass: "event-pending",
    startColumn: 5,
    endColumn: 7, // Spans 2 days: 5, 6
    span: 2, // endColumn - startColumn
  };

  toggleView(view: "month" | "week"): void {
    this.currentView = view;
  }

  counter(count: number): number[] {
    return new Array(count).fill(0).map((_, i) => i);
  }

  getDays(): CalendarDay[] {
    const days: CalendarDay[] = [];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    if (this.currentView === "month") {
      // Example: 30 days for a month.
      // In a real scenario, you'd calculate days in the current month.
      const daysInMonth = 30;
      const startingDayOfWeek = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth(),
        1
      ).getDay(); // 0 for Sun, 1 for Mon etc.
      for (let i = 1; i <= daysInMonth; i++) {
        const dayIndex = (startingDayOfWeek + i - 1) % 7;
        const currentDayDate = new Date(
          this.currentDate.getFullYear(),
          this.currentDate.getMonth(),
          i
        );
        days.push({
          dayNumber: i,
          dayName: dayNames[dayIndex],
          date: currentDayDate.toISOString().split("T")[0], // YYYY-MM-DD format
        });
      }
    } else {
      // Week view: 7 days
      const today = this.currentDate.getDay(); // Current day of the week for currentDate
      for (let i = 0; i < 7; i++) {
        const dayOffset = (today + i) % 7;
        // Calculate actual day number in month for the week view
        const tempDate = new Date(this.currentDate);
        tempDate.setDate(this.currentDate.getDate() - today + i);
        days.push({
          dayNumber: tempDate.getDate(),
          dayName: dayNames[dayOffset],
          date: tempDate.toISOString().split("T")[0], // YYYY-MM-DD format
        });
      }
    }
    return days;
  }

  equalDates(date1: string, date2: string): boolean {
    return new Date(date1).toDateString() === new Date(date2).toDateString();
  }

  ceil(value: number): number {
    return Math.ceil(value);
  }

  min(a: number, b: number): number {
    return Math.min(a, b);
  }
}
// Ensure no characters or code exist after this closing brace.
