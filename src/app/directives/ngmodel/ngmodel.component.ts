import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngmodel',
  templateUrl: './ngmodel.component.html',
  styleUrls: ['./ngmodel.component.css']
})
export class NgmodelComponent implements OnInit {

  public num_one : number
  public num_two : number
  constructor(){
    this.num_one = 0
    this.num_two = 0
  }

  ngOnInit(): void {
  }

}

