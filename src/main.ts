import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { NoteComponent } from './note/note.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditNoteComponent } from './edit-note/edit-note.component';

const routes: Routes = [
  {path: '',  component: NoteComponent},
  { path: 'note',title: "Angular Notes", component: NoteComponent },
  { path: 'note/:id',title: "Angular Edit Note", component: EditNoteComponent },
  { path: '**',title: "404 Page not Found", component: NotFoundComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
})
  .catch((err) => console.error(err));
//Project for learning Angular components, forms and rounting.