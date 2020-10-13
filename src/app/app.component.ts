import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements AfterViewInit{
  title = 'ScrollingDistpachProblem';

  constructor(private scrollDispatcher: ScrollDispatcher) {}

  ngAfterViewInit(): void {
    this.scrollDispatcher.scrolled().subscribe((event: CdkScrollable) => {      
      console.log(event);
    });
  }
}

