import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoryModel } from '../../models/StoryModel';
import { environment } from '../../../environment/environment';


@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  create(book: StoryModel): Observable<StoryModel> {
    return this.http.post<StoryModel>(`${this.apiUrl}/books`, book);
  } 

}