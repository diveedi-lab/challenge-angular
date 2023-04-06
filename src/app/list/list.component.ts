import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface TvShow {
  id: number,
  genre: string[],
  image: {
    medium: string
  },
  name: string
}

interface Response {
  score: number,
  show: TvShow
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  constructor(private _http: HttpClient){}

  data: TvShow[] = [];

  ngOnInit(): void {
    this.getData().subscribe((res) => {
      this.data = res.map(r => r.show);
    })
  }

  private getData(){
    return this._http.get<Response[]>('https://api.tvmaze.com/search/shows?q=naruto')
  }
}
