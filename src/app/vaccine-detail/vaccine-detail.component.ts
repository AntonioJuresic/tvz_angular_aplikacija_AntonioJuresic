import {Component, Input, OnInit} from '@angular/core';
import {Vaccine} from '../vaccine/vaccine';

@Component({
	selector: 'app-vaccine-detail',
	templateUrl: './vaccine-detail.component.html',
	styleUrls: ['./vaccine-detail.component.scss']
})
export class VaccineDetailComponent implements OnInit {

	@Input() vaccine: Vaccine;

	constructor() {
	}

	ngOnInit(): void {
	}

}