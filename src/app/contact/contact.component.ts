import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private router: Router) {}

  submitForm() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      // Handle form submission here (e.g., sending data to a server)
      this.router.navigate(['/thank-you']);
    }
  }
}
