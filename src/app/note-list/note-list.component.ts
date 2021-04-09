import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/notes'

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  notesArray: Note[] = [
    {id: 1, noteTitle: `Title`, media: `No`, description: `Just desc`},
    {id: 2, noteTitle: `Title 2`, media: `No`, description: `Just desc 2`},
    {id: 3, noteTitle: `Title 3`, media: `No`, description: `Just desc 3`}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
