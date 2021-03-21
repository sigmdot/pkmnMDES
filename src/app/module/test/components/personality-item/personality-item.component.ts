import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personality-item',
  templateUrl: './personality-item.component.html',
  styleUrls: ['./personality-item.component.css']
})
export class PersonalityItemComponent implements OnInit {
  @Input() persona: any;
  @Input() total:any;
  constructor() { }

  ngOnInit(): void {
  }

}
