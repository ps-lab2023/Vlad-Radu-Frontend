import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from 'src/app/service/Movie.service';

declare global {
  interface Window {
    bootstrap: any;
  }
}

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit{

  @ViewChild('movieTextArea') movieTextArea: any;
  searchText: string = "";
  movies: any;
  selectedMovie: any;

  viewMovieModal:any;
  editMovieModal:any;
  deleteMovieModal:any;
  addMovieModal:any;
  importFileModal:any;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();

    this.viewMovieModal = new window.bootstrap.Modal(
      document.getElementById("viewMovieModal")
    );

    this.editMovieModal = new window.bootstrap.Modal(
      document.getElementById("editMovieModal")
    );

    this.deleteMovieModal = new window.bootstrap.Modal(
      document.getElementById("deleteMovieModal")
    );

    this.addMovieModal = new window.bootstrap.Modal(
      document.getElementById("addMovieModal")
    );

    this.importFileModal = new window.bootstrap.Modal(
      document.getElementById("importFileModal")
    );
  }

  openViewMovieModal(id: number){
    this.viewMovieModal?.show();
    this.selectedMovie = this.getMovieById(id);
  }

  closeViewMovieModal(){
    this.viewMovieModal?.hide();
  }

  openEditMovieModal(id: number){
    this.editMovieModal?.show();
    this.selectedMovie = this.getMovieById(id);
  }

  closeEditMovieModal(){
    this.editMovieModal?.hide();
  }

  saveEditMovieModal(){
    this.editMovieModal?.hide();
    this.updateMovie(this.selectedMovie);
  }

  openDeleteMovieModal(id: number){
    this.deleteMovieModal?.show();
    this.selectedMovie = this.getMovieById(id);
  }

  closeDeleteMovieModal(){
    this.deleteMovieModal?.hide();
  }

  confirmDeleteMovie(){
    this.deleteMovie(this.selectedMovie.id);
    this.closeDeleteMovieModal();
  }

  openAddMovieModal(){
    this.addMovieModal?.show();
  }

  closeAddMovieModal(){
    this.addMovieModal?.hide();
  }

  confirmAddMovieModal(){
    this.addMovieModal?.hide();
    const movieData = this.movieTextArea.nativeElement.value;
    console.log(movieData);
    this.addMovie(JSON.parse(movieData));
  }

  openImportFileModal(){
    this.importFileModal?.show();
  }

  closeImportFileModal(){
    this.importFileModal?.hide();
  }

  confirmImportFileModal(){
    this.importFileModal?.hide();
  }

  addMovie(movie: any) {
    this.movieService.addMovie(movie).subscribe(
      (data) => {
        console.log(data);
        this.getMovies();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getMovies() {
    this.movieService.getAllMovies().subscribe(
      (data) => {
        this.movies = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getMovieById(id: number) {
    this.movieService.getMovieById(id).subscribe(
      (data) => {
        this.selectedMovie = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateMovie(movie: any) {
    this.movieService.updateMovie(movie).subscribe(
      (data) => {
        console.log(data);
        this.getMovies();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteMovie(id: number) {
    this.movieService.deleteMovie(id).subscribe(
      (data) => {
        console.log(data);
        this.getMovies();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getActorsAsJson(): string {
    return JSON.stringify(this.selectedMovie.actors);
    //return JSON.stringify(JSON.parse(this.selectedMovie.actors));
  }

}
