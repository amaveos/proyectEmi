import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DbService } from '../../_service/db.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule],
  providers:[DbService],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {

  taskForm!: FormGroup;
  listaDeNotas:any = [];
  nota:any ="";

  constructor(private formBuilder: FormBuilder, public dbService: DbService) {
    this.taskForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(60)]],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],
      state: ['', Validators.required],
      notes: [[], Validators.required]
    })
  }

  addNote(){
    this.listaDeNotas.push(this.nota)
    console.log(this.listaDeNotas)
    this.nota="";
  }

  setNotes(){
    this.taskForm.get('notes')?.setValue(this.listaDeNotas);
  }

  eSubmit() {

  }

}
