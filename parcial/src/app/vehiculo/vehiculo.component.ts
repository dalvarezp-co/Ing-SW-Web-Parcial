import { Component, OnInit } from '@angular/core';
import { dataVehiculos } from './dataVehiculos';
import { Vehiculo } from './vehiculo';
import { VehiculoService } from './vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  constructor(private vehiculoService: VehiculoService) { }
  vehiculos: Array<Vehiculo> = [];

  count1 = 0;
  count2 = 0;
  count3 = 0;

  getVehiculos() {
    this.vehiculoService.getVehiculos().subscribe(vehiculos => {
      this.vehiculos = vehiculos;
      this.countVehiculos();
    });
  }

  countVehiculos(){
    for(const element of this.vehiculos) {
      if (element.marca == 'Renault'){
        this.count1 += 1;
      }
      if (element.marca == 'Chevrolet'){
        this.count2 += 1;
      }
      if (element.marca == 'Nissan'){
        this.count3 += 1;
      }
    }
  }

  ngOnInit() {
    this.getVehiculos();
    this.countVehiculos();
  }

}
