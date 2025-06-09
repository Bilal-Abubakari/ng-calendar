import { Component } from "@angular/core";
import { NgxCalendarEvent } from "ngx-calendar-event";

@Component({
  selector: "app-root",
  imports: [NgxCalendarEvent],

  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  protected title = "ngx-calendar-event-demo";
}
