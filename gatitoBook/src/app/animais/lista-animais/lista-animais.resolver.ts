import { AnimaisService } from './../animais.service';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { animais } from './../animais';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of, switchMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListaAnimaisResolver implements Resolve<animais> {
  constructor(
    private usuarioService: UsuarioService,
    private animaisService: AnimaisService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<animais> {
    return this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.animaisService.listaDoUsuario(userName);
      }),
      take(1)
    );
  }
}
