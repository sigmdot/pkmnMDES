import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone-test',
  templateUrl: './zone-test.component.html',
  styleUrls: ['./zone-test.component.css'],
})
export class ZoneTestComponent implements OnInit {
  questions = [
    {
      question: "Your friend suddenly won't listen to you, when everything was fine yesterday. What happened?",
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

  constructor() {}

  ngOnInit(): void {}
}
