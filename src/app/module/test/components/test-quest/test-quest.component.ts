import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-test-quest',
  templateUrl: './test-quest.component.html',
  styleUrls: ['./test-quest.component.css']
})
export class TestQuestComponent implements OnInit {
  @Input() question: any;
  constructor() { }

  ngOnInit(): void {
  }

}
