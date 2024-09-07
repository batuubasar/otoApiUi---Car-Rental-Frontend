export class OtoDto {
    otoId: number | null;
    model: string;
    brand: string;
    mileage: number;
    fuel: string;
    transmission: string;
    year: number;
    price: number;
    color: string;
    photo: string;
    photoUrl?: string;
  
    constructor(
      otoId: number | null = null,
      model: string = '',
      brand: string = '',
      mileage: number = 0,
      fuel: string = '',
      transmission: string = '',
      year: number = 0,
      price: number = 0,
      color: string = '',
      photo: string = '',
      photoUrl?: string
    ) {
      this.otoId = otoId;
      this.model = model;
      this.brand = brand;
      this.mileage = mileage;
      this.fuel = fuel;
      this.transmission = transmission;
      this.year = year;
      this.price = price;
      this.color = color;
      this.photo = photo;
      this.photoUrl = photoUrl;
    }
  }
  