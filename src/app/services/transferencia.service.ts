import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia, RawTranferencia } from '../models/Transferencia.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: Transferencia[]
  private url = `http://localhost:3000/transferencias`

  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = []
  }

  get transferencias() {
    return this.listaTransferencias;
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(rawTransferencia: RawTranferencia) : Observable<Transferencia>{
    let transferencia = this.tratarTransferencia(rawTransferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia)
  }

  tratarTransferencia(rawTransferencia: RawTranferencia) {
    var transferencia: Transferencia = {
      ...rawTransferencia,
      data: new Date()
    }
    return transferencia;
  }
}
