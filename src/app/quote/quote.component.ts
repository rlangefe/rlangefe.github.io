import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

declare var data : any;

@Component({
	selector: 'app-quote',
	templateUrl: './quote.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./quote.component.css'],
	animations: [
		trigger('fadeInOut', [
		  state('in', style({ opacity: 1 })),
		  transition(':enter', [
			style({ opacity: 0 }),
			animate('1000ms ease-in')
		  ]),
		  transition(':leave', [
			animate('1000ms ease-out', style({ opacity: 0 }))
		  ])
		])
	  ]
})
export class QuoteComponent implements OnInit {
	//public quoteData = this.getRandomValue(data['Quote']);
	public quoteData = data['Quote'];
	public images = this.shuffleArray(this.quoteData['images']);
	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
		this.randomizeImages();
	  }
	
	// randomizeImages(): void {
	// 	setInterval(() => {
	// 	  this.images = this.shuffleArray(this.images);
	// 	  this.changeDetectorRef.detectChanges();
	// 	}, 5000); // Change images every 5 seconds
	//   }

	// randomizeImages(): void {
	// 	setInterval(() => {
	// 	  const shuffledImages = this.shuffleArray([...this.images]);
	// 	  this.updateImagesOneByOne(shuffledImages);
	// 	}, this.images.length * 2000); // Change images every 5 seconds
	//   }
	
	  shuffleArray(array: any[]): any[] {
		for (let i = array.length - 1; i > 0; i--) {
		  const j = Math.floor(Math.random() * (i + 1));
		  [array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	  }

	//   updateImagesOneByOne(shuffledImages: any[]): void {
	// 	shuffledImages.forEach((image, index) => {
	// 	  setTimeout(() => {
	// 		this.images[index] = image;
	// 		this.changeDetectorRef.detectChanges();
	// 	  }, index * 2000); // Update each image with a delay
	// 	});
	// }
	randomizeImages(): void {
		setInterval(() => {
		  this.swapTwoRandomImages();
		  this.changeDetectorRef.detectChanges();
		}, 3000); // Swap images every 3 seconds
	  }
	
	  swapTwoRandomImages(): void {
		const index1 = Math.floor(Math.random() * this.images.length);
		let index2 = Math.floor(Math.random() * this.images.length);
		while (index1 === index2) {
		  index2 = Math.floor(Math.random() * this.images.length);
		}
		[this.images[index1], this.images[index2]] = [this.images[index2], this.images[index1]];
	  }

	// public getRandomValue(e : any) {
	// 	return Array.isArray(e) ? e[Math.floor(Math.random() * e.length)] : e;
	// }

	// ngOnInit(): void {
	// 	this.changeDetectorRef.detectChanges();
	// }
}
