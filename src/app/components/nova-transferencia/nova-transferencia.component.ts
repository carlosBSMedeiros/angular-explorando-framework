import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  transferencia : { valor: number; destino: number; } = {valor : 0, destino:0};
  
  transferir(){
    this.aoTransferir.emit(this.transferencia);
    this.limparFormulario();
  }

  limparFormulario(){
    this.transferencia.valor = 0;
    this.transferencia.destino = 0;
  }
}
