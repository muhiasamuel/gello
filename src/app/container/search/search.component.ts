import { Component, ElementRef, Output, ViewChild } from '@angular/core';
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


  @ViewChild('searchInput')searchInputEl!: ElementRef;

onSearchtextChanged(){
 
}

updateSearchText(){
//  this.searchText = event.target.valu

this.searchText = this.searchInputEl.nativeElement.value
this.searchtextChanged.emit(this.searchText)
}
}
