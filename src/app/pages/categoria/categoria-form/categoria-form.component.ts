import { Categoria } from './../../../shared/models/categoria.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {
  categoriaForm!: FormGroup
  id!: FormControl
  nome!: FormControl
  categoria: Categoria = new Categoria()

  constructor() { }

  ngOnInit() {
    this.id = new FormControl('')
    this.nome = new FormControl('', [Validators.required, Validators.minLength(3)])
    this.categoriaForm = new FormGroup({
      id: this.id,
      nome: this.nome,
    })
  }

  salvarForm() {
    if (this.categoriaForm.valid) {
      Object.assign(this.categoria, this.categoriaForm.value)

      console.log(this.categoria)
    }

  }

}
