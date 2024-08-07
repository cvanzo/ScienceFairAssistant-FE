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
  selectedFile: File | null = null;
  question: string = '';

  constructor(private apiService: ApiService) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.apiService.uploadFile(this.selectedFile).subscribe((response: UploadResponse) => {
        console.log(response);
      });
    }
  }

}
