import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent {
  name: string;
  totalCost: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.name = '';
    this.totalCost = 1;
  }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    this.totalCost = this.route.snapshot.params['cost'];
  }

  navigateToProductList = () => {
    this.router.navigateByUrl("");
  };
}
