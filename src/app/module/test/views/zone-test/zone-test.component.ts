import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-zone-test',
  templateUrl: './zone-test.component.html',
  styleUrls: ['./zone-test.component.css'],
})
export class ZoneTestComponent implements OnInit {
  question$:Observable<any>;
  questionser: Array<any> = null;
  totalpp = 0;
  personality = [
    {
      name: 'Osado', //BOLD
      points: 0,
    },
    {
      name: 'Valiente', //BRAVE
      points: 0,
    },
    {
      name: 'Calmado', // CALM
      points: 0,
    },
    {
      name: 'Dócil', // Docile
      points: 0,
    },
    {
      name: 'Vigoroso', // Hardy
      points: 0,
    },
    {
      name: 'Apresurado', // Hasty
      points: 0,
    },
    {
      name: 'Travieso', //Impish
      points: 0,
    },
    {
      name: 'Alegre', // Jolly
      points: 0,
    },
    {
      name: 'Solitario', // Lonely
      points: 0,
    },
    {
      name: 'Ingenuo', // Naive
      points: 0,
    },
    {
      name: 'Tranquilo', // Quiet
      points: 0,
    },
    {
      name: 'Peculiar', // Quirky
      points: 0,
    },
    {
      name: 'Imprudente', // Rash
      points: 0,
    },
    {
      name: 'Relajado', // Relaxed
      points: 0,
    },
    {
      name: 'Atrevido', // Sassy
      points: 0,
    },
    {
      name: 'Timido', // Timid
      points: 0,
    },
  ];


  getAnswer(answer: any) {
    console.log(answer);
    answer.points.forEach((element) => {
      this.personality.forEach((e) => {
        if (e.name === element.nature) {
          e.points = e.points + element.points;
        }
      });
    });
  }
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.question$ = this.http.get('http://localhost:4000/questions/random/15');
    this.question$.subscribe((data)=>{
      this.questionser = data.body;
      console.log(this.questionser);
    })
  }
}
