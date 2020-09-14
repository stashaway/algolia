import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})

export class SearchResultComponent implements OnInit {
  @Input('concert') concert: any;

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
  }
}
