import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { UploadResponse } from '../../interfaces/api.interfaces';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    HttpClientModule
  ],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  providers: [ApiService]
})
export class UploadComponent {
  selectedFiles: FileList | null = null;
  question: string = '';

  constructor(private apiService: ApiService) { }

 // Event handler for file selection
 onFileSelected(event: any): void {
  this.selectedFiles = event.target.files;
  console.log('Selected files:', this.selectedFiles);
}

// Function to upload selected files
onUpload(): void {
  if (this.selectedFiles) {
    this.apiService.uploadFiles(this.selectedFiles).subscribe(
      response => {
        console.log('Upload successful:', response);
      },
      error => {
        console.error('Upload failed:', error);
      }
    );
  } else {
    console.log('No files selected.');
  }
}

}
