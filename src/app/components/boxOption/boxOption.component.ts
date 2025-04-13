import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'box-option',
  standalone: true,
  template: `
    <div class="caixa-mensagem" (click)="execEvent()">
      <p>{{ text }}</p>
    </div>
  `,
  styleUrls: ['./boxOption.component.css']
})
export class BoxOptionComponent {
  @Input() text: string = '';
  @Input() tipo: string = '';

  @Output() eventEmitter = new EventEmitter<string>();

  execEvent() {
    this.eventEmitter.emit(this.tipo); // envia o "tipo" da resposta
  }
}
