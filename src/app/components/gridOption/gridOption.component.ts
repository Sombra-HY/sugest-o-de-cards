import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Resposta } from '../Model/Pergunta';
import { BoxOptionComponent } from '../boxOption/boxOption.component';

@Component({
  selector: 'grid-option',
  standalone: true,
  styleUrls: ['gridOption.component.css'],
  imports: [BoxOptionComponent],
  template: `
    <div class="grid-options">
      @for (resposta of respostas; track resposta.id) {
        <box-option
          [text]="resposta.texto"
          [tipo]="resposta.tipo"
          (eventEmitter)="selecionar(resposta)"
        />
      }
    </div>
  `
})
export class GridOptionComponent {
  @Input() respostas: Resposta[] = [];

  @Output() respostaSelecionada = new EventEmitter<Resposta>();
  @Output() addItemEvent = new EventEmitter<string>();

  selecionar(resposta: Resposta) {
    this.respostaSelecionada.emit(resposta);         // opcional: se quiser emitir objeto completo
    this.addItemEvent.emit(resposta.tipo);           // envia o "tipo" da resposta para o componente pai
  }
}
