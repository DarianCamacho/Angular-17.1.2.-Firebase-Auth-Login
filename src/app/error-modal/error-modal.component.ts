import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css']
})
export class ErrorModalComponent {
  errorMessage: string;

  constructor(/* Aquí van los inyectables u otras dependencias */) {
    this.errorMessage = ''; // Inicialización en el constructor
  }
}

