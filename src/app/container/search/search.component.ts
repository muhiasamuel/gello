import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
searchText: string = ''

@Output()
searchtextChanged: EventEmitter<string> = new EventEmitter<string>()

onSearchtextChanged(){
  this.searchtextChanged.emit(this.searchText)
}

updateSearchText(event: any){
 this.searchText = event.target.value
}
}
