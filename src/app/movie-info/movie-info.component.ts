import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OmdbService } from '../omdb.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {
  id: any;
  data: any;
  constructor(private route:ActivatedRoute,private omdbService:OmdbService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['imdbID'];
    this.getOneMovie();
  }

  getOneMovie(){
    this.omdbService.getDataDetails(this.id).subscribe((data)=>{
      this.data=data;
      console.log(data);
    })
  }
}