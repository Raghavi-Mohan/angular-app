import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-catalogcomponent',
  templateUrl: './catalogcomponent.component.html',
  styleUrl: './catalogcomponent.component.scss'
})
export class CatalogcomponentComponent {
  images = [
    { name: 'Gopuram', url: 'https://via.placeholder.com/150' },
    { name: 'babyKrishna', url: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Image+2' },
    { name: 'homeSweetHome', url: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Image+3' },
    { name: 'Budha', url: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Image+4' },
    { name: 'gitlWithGuitar', url: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Image+4' }
  ];
}
