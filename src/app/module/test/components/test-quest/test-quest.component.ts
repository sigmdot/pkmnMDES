import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';

import TypeIt from "typeit";
@Component({
  selector: 'app-test-quest',
  templateUrl: './test-quest.component.html',
  styleUrls: ['./test-quest.component.css'],
})
export class TestQuestComponent implements OnInit, OnChanges {
  @Input() question: any;
  @Output() answerEmitter: EventEmitter<any>= new EventEmitter();

  constructor() {}

  sendAnswer(answer:any){
    this.answerEmitter.emit(answer);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {}
}
