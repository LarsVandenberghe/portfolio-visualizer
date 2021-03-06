import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  isCollapsed = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  navigateRoot(): void {
    this.router.navigate(['']);
  }

  navigateRapidapiSettings(): void {
    this.router.navigate(['rapidapi-settings']);
  }

  navigateStocks(): void {
    this.router.navigate(['stocks']);
  }

  forceClick(id: string): void {
    console.log('clicking on', id);
    (document as any).querySelector('#' + id).click();
  }
}