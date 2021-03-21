import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medidor',
  templateUrl: './medidor.component.html',
  styleUrls: ['./medidor.component.css']
})
export class MedidorComponent implements OnInit {
  @Input() personality: Array<any>;
  @Input() totalpp:any;
  constructor() { }

  ngOnInit(): void {
  }

}
