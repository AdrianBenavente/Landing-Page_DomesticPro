import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Users } from 'src/app/model/usuarios.model';
import { CatalogoService } from 'src/app/services/usuarios/catalogo.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  user: Users = new Users()
  mensaje: string = "";

  constructor(private as: CatalogoService, private router: Router){}
  ngOnInit(): void {
  this.form = new FormGroup({
    id:new FormControl(),
    name: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    age: new FormControl(),
    district: new FormControl(),
    profession: new FormControl()
  });
  }

  aceptar(): void{
    this.user.id=this.form.value['id'];
    this.user.name=this.form.value['name'];
    this.user.lastname=this.form.value['lastname'];
    this.user.email=this.form.value['email'];
    this.user.age=this.form.value['age'];
    this.user.district=this.form.value['district'];
    this.user.profession=this.form.value['profession'];
    if(this.form.value['name'].length > 0 &&
    this.form.value['email'].length > 0){
      this.as.insert(this.user).subscribe(data => {
        this.as.list().subscribe(data => { this.as.setList(data);
      })
    })
    this.router.navigate(['users']);
    }else{
      this.mensaje="Completa los Campos!!"
    }
  }

}
