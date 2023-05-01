import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Users } from 'src/app/model/usuarios.model';
import { Subject, Observable } from 'rxjs';

const base_url=environment.base

@Injectable({
  providedIn: 'root'
})

export class CatalogoService {
  url:string="http://localhost:5000/users";
  private listaCambio = new Subject<Users[]>()

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Users[]>(this.url);
  }

  insert(user:Users){
    return this.http.post(this.url, user);
  }

  setList(listaNueva: Users[]){
    this.listaCambio.next(listaNueva)
  }
  getList(){
    return this.listaCambio.asObservable();
  }
}
