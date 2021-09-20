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

  constructor() { }

  ngOnInit() {
    this.id = new FormControl('')
    this.nome = new FormControl('', Validators.required)
    this.categoriaForm = new FormGroup({
      id: this.id,
      nome: this.nome,
    })
  }

  salvarForm(){
    console.log(this.categoriaForm.value)
  }

}
