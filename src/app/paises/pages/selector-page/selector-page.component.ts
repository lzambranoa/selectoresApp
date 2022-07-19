import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  //creacion del formulario
  miFormulario: FormGroup = this.fb.group({
    region: [ '', Validators.required ]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.miFormulario.value)
  }

}
