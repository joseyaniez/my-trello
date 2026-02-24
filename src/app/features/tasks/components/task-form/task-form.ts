import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
  host: {
    'class': 'flex flex-col items-center w-full'
  }
})
export class TaskForm {
  taskContent = new FormControl('');
}
