import { Categoria } from './../../../shared/models/categoria.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {
  idUrl!: number
  categoriaForm!: FormGroup
  id!: FormControl
  nome!: FormControl
  categoria: Categoria = new Categoria()

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.id = new FormControl('')
    this.nome = new FormControl('', [Validators.required, Validators.minLength(3)])
    this.categoriaForm = new FormGroup({
      id: this.id,
      nome: this.nome,
    })
    this.idUrl = +this.activatedRoute.snapshot.params['id']
    console.log(this.idUrl)
    if(!(this.idUrl == undefined)){
      this.load()
    }
  }

  salvarForm() {
    if (this.categoriaForm.valid) {
      Object.assign(this.categoria, this.categoriaForm.value)
      if(this.idUrl){
        this.create()
      }else{
        this.update()
      }
    }

  }
  create(){
    this.httpClient.post("http://localhost:3000/categoria", this.categoria).subscribe((categoria) => {
      console.log(categoria)
    })
    
  }

  load(){
    this.httpClient.get("http://localhost:3000/categoria/"+this.idUrl).subscribe((categoria) => {
      this.categoria = categoria  
      this.categoriaForm.patchValue(this.categoria)
    })
  }

  update(){
    console.log(this.categoria)
    this.httpClient.put("http://localhost:3000/categoria", this.categoria).subscribe((categoria) => {
      console.log(categoria)
    })
  }

}
