import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AskResponse, UploadResponse } from '../interfaces/api.interfaces';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3333/api'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  // Function to upload multiple files
  uploadFiles(files: FileList): Observable<UploadResponse> {
    const formData: FormData = new FormData();
    console.log('Files to upload:', files);

    // Append each file to the FormData object
    Array.from(files).forEach((file: File) => {
      console.log('File to upload next:', file);
      formData.append('files', file, file.name);
    });

    console.log('Uploading formdata:', formData);

    return this.http.post<UploadResponse>(`${this.apiUrl}/upload`, formData);
  }

  // Function to ask a question
  askQuestion(question: string): Observable<AskResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<AskResponse>(`${this.apiUrl}/ask`, { question }, { headers });
  }
}
