import { Component, OnInit } from '@angular/core';
import { OtoService } from '../../services/oto.service';
import { OtoDto } from '../../models/oto-dto.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-show-cars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-cars.component.html',
  styleUrls: ['./show-cars.component.css']
})

export class ShowCarsComponent implements OnInit {
  otos: OtoDto[] = [];

  constructor(private otoService: OtoService) { }

  ngOnInit(): void {
    this.otoService.getAllOtos().subscribe({
      next: (data) => {
        this.otos = data;
      },
      error: (err) => {
        console.error('Failed to fetch cars:', err);
      }
    });
  }
}
