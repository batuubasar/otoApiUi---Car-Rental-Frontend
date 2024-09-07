import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OtoService } from '../../services/oto.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-oto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-oto.component.html',
  styleUrls: ['./add-oto.component.css']
})
export class AddOtoComponent implements OnInit {
  
  addOtoForm: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private otoService: OtoService,
    private router: Router
  ) {
    this.addOtoForm = this.formBuilder.group({
      // otoId gerek yok kendisi manuel atıyor backendde
      model: ['', Validators.required],
      brand: ['', Validators.required],
      mileage: ['', Validators.required],
      fuel: ['', Validators.required],
      transmission: ['', Validators.required],
      year: ['', Validators.required],
      price: ['', Validators.required],
      color: ['', Validators.required],
      // photo burada gerekli değil çünkü dosya ayrı olarak ekleniyor
    });
  }

  ngOnInit(): void {
    console.log('Form initialized:', this.addOtoForm);
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
        this.selectedFile = file;
        console.log('File selected:', this.selectedFile);
    }
  }

  onSubmit(): void {
    if (this.addOtoForm.invalid || !this.selectedFile) {
      console.warn('Form is invalid or file is not selected');
      return;
    }

    const otoDto = this.addOtoForm.value;
    // photo alanını kaldır
    delete otoDto.photo;

    const formData: FormData = new FormData();
    formData.append('otoDto', JSON.stringify(otoDto));
    formData.append('file', this.selectedFile);

    console.log('Submitting form with:', otoDto, this.selectedFile);

    this.otoService.addOto(formData).subscribe(
      (response) => {
        console.log('Car added successfully', response);
        this.router.navigate(['show-cars']);
      },
      (error) => {
        console.error('Error adding car: Please check your authorization. If you are an admin, make sure the form is filled out completely.', error);
      }
    );
  }
}
