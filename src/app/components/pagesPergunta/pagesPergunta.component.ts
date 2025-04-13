import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pergunta } from '../Model/Pergunta';
import { GridOptionComponent } from '../gridOption/gridOption.component';

@Component({
  selector: 'app-pages-pergunta',
  standalone: true,
  imports: [CommonModule, GridOptionComponent],
  styleUrl:'pagesPergunta.component.css',
  template: `
    @if (!isDoneQuestions) {
      <section>
        <h1>{{ listAsks[pageNow].pergunta }}</h1>
        <grid-option
          [respostas]="listAsks[pageNow].respostas"
          (addItemEvent)="addOption($event)"
        />
      </section>
    } @else {
      <section>
        <h2>Você escolheu:</h2>
        <ul>
          @for (resposta of listResposta; track resposta) {
            <li>{{ resposta }}</li>
          }
        </ul>
      </section>
    }
  `
})
export class pagesPerguntaComponent {
  pageNow: number = 0;
  limit: number = 2;
  isDoneQuestions: boolean = false;

  listResposta: string[] = [];

  listAsks: Pergunta[] = [
    {
      id: 1,
      pergunta: "Qual cenário você prefere?",
      respostas: [
        { id: 101, texto: "Uma floresta mágica", tipo: "Fantasia", pontos: 2 },
        { id: 102, texto: "Uma cidade cheia de vilões", tipo: "Ação", pontos: 2 },
        { id: 103, texto: "Uma escola maluca", tipo: "Comédia", pontos: 2 },
        { id: 104, texto: "Um mundo desconhecido com muitos mistérios", tipo: "Aventura", pontos: 2 }
      ]
    },
    {
      id: 2,
      pergunta: "Qual desses personagens você gostaria de ser?",
      respostas: [
        { id: 201, texto: "Um mago poderoso", tipo: "Fantasia", pontos: 2 },
        { id: 202, texto: "Um herói com superpoderes", tipo: "Ação", pontos: 2 },
        { id: 203, texto: "Um aluno que vive confusões engraçadas", tipo: "Comédia", pontos: 2 },
        { id: 204, texto: "Um explorador destemido", tipo: "Aventura", pontos: 2 }
      ]
    },
    {
      id: 3,
      pergunta: "O que mais te prende em um desenho?",
      respostas: [
        { id: 301, texto: "O universo cheio de magia", tipo: "Fantasia", pontos: 2 },
        { id: 302, texto: "As lutas e batalhas épicas", tipo: "Ação", pontos: 2 },
        { id: 303, texto: "As piadas e situações engraçadas", tipo: "Comédia", pontos: 2 },
        { id: 304, texto: "As descobertas e reviravoltas", tipo: "Aventura", pontos: 2 }
      ]
    }
  ];

  addOption(resposta: string) {
    this.listResposta.push(resposta);
    this.nextPage();
  }

  nextPage() {
    if (this.pageNow === this.limit) {
      this.isDoneQuestions = true;
      this.somePoints();
    } else {
      this.pageNow += 1;
    }
  }

  somePoints() {
    console.log("Respostas: ", this.listResposta);
  }
}
