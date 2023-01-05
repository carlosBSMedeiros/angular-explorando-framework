import { Component, EventEmitter, Output } from '@angular/core';
import { RawTranferencia, Transferencia } from 'src/app/models/Transferencia.model';
import { TransferenciaService } from 'src/app/services/transferencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  transferencia :RawTranferencia = {valor : null, destino:null};
  
  constructor(private tranferenciaService: TransferenciaService, private router: Router){}

  transferir(){
    this.tranferenciaService.adicionar(this.transferencia).subscribe((result:Transferencia)=>{
      this.limparFormulario();
      this.router.navigateByUrl('extrato')
    }, 
    (error) => console.error(error)
    )
  }

  limparFormulario(){
    this.transferencia.valor = null;
    this.transferencia.destino = null;
  }
}
