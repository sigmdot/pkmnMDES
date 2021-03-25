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

  getRandom(arr, n) {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError('getRandom: more elements taken than available');
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  getAnswer(answer: any) {
    answer.points.forEach((element) => {
      this.personality.forEach((e) => {
        if (e.name === element.name) {
          e.points = e.points + element.points;
          console.log(e.points, 'personality points');
        }
      });
    });
    this.totalpp = 0;
    this.personality.forEach((e) => {
      this.totalpp = this.totalpp + e.points;
    });
    console.log('totalpp = ', this.totalpp);
  }
  constructor() {}

  ngOnInit(): void {}
}
