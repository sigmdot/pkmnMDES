import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone-test',
  templateUrl: './zone-test.component.html',
  styleUrls: ['./zone-test.component.css'],
})
export class ZoneTestComponent implements OnInit {
  totalpp = 0;
  personality = [
    {
      name: 'Osado',
      points: 0,
    },
    {
      name: 'Valiente',
      points: 0,
    },
    {
      name: 'Calmado',
      points: 0,
    },
    {
      name: 'Dócil',
      points: 0,
    },
    {
      name: 'Vigoroso',
      points: 0,
    },
    {
      name: 'Apresurado',
      points: 0,
    },
    {
      name: 'Travieso',
      points: 0,
    },
    {
      name: 'Alegre',
      points: 0,
    },
    {
      name: 'Solitario',
      points: 0,
    },
    {
      name: 'Ingenuo',
      points: 0,
    },
    {
      name: 'Tranquilo',
      points: 0,
    },
    {
      name: 'Peculiar',
      points: 0,
    },
    {
      name: 'Imprudente',
      points: 0,
    },
    {
      name: 'Relajado',
      points: 0,
    },
    {
      name: 'Atrevido',
      points: 0,
    },
    {
      name: 'Timido',
      points: 0,
    },
  ];
  questions = [
    {
      question:
        "Your friend suddenly won't listen to you, when everything was fine yesterday. What happened?",
      answers: [
        {
          answer: 'Nada Bro',
          points: [
            {
              name: 'Valiente',
              points: 2,
            },
            {
              name: 'Relajado',
              points: 1,
            },
          ],
        },
        {
          answer: 'Te mató bro, por jil',
          points: [
            {
              name: 'Valiente',
              points: 2,
            },
            {
              name: 'Relajado',
              points: 1,
            },
          ],
        },
      ],
    },
    {
      question: '¿ Que pasa bro ?',
      answers: [
        {
          answer: 'Nada Bro',
          points: [
            {
              name: 'Valiente',
              points: 2,
            },
            {
              name: 'Relajado',
              points: 1,
            },
          ],
        },
        {
          answer: 'Te mató bro, por jil',
          points: [
            {
              name: 'Valiente',
              points: 2,
            },
            {
              name: 'Relajado',
              points: 1,
            },
          ],
        },
      ],
    },
    {
      question: '¿ Que pasa bro ?',
      answers: [
        {
          answer: 'Nada Bro',
          points: [
            {
              nature: 'Valiente',
              points: 2,
            },
            {
              nature: 'Relajado',
              points: 1,
            },
          ],
        },
        {
          answer: 'Te mató bro, por jil',
          points: [
            {
              nature: 'Valiente',
              points: 2,
            },
            {
              nature: 'Relajado',
              points: 1,
            },
          ],
        },
      ],
    },
  ];
  step(lol: any) {
    console.log(lol);
  }
  getAnswer(answer: any) {
    answer.points.forEach((element) => {
      this.personality.forEach((e) => {
        if (e.name === element.name) {
          console.log(e, 'e');
          e.points = e.points + element.points;
          this.totalpp = this.totalpp + e.points;
        }
        console.log('totalpp = ', this.totalpp);
      });
      console.log(element, 'Element');
    });
  }
  constructor() {}

  ngOnInit(): void {}
}
