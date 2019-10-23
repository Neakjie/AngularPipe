import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-pipe',
  templateUrl: './show-pipe.component.html',
  styleUrls: ['./show-pipe.component.scss']
})
export class ShowPipeComponent implements OnInit {
  data = "2019-07-26T12:33:36.888";
  constructor() { }

  ngOnInit() {
  }

}
