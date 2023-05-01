import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Users } from 'src/app/model/usuarios.model';
import { CatalogoService } from 'src/app/services/usuarios/catalogo.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})

export class CatComponent implements OnInit {
  searchText:any;
  lista: Users[]= []
  dataSource: MatTableDataSource <Users> = new MatTableDataSource();

  displayedColumns: string[] = ['id','name','lastname','email','age','district','profession'];

  constructor(private as: CatalogoService) {}

  ngOnInit(): void {
    this.as.list().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data)
    })
    this.as.getList().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data)
    })
  }
}
