import { Component, Input } from '@angular/core';
import { TransferenciaService } from 'src/app/services/transferencia.service';
import { Transferencia } from 'src/app/models/Transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent {

  @Input() transferencias : Transferencia[]

  constructor(private transferenciaService: TransferenciaService){
  }

  ngOnInit(){
    this.transferenciaService.todas().subscribe((transferencias: Transferencia[]) =>{
      this.transferencias = transferencias;
    })
  }
}
