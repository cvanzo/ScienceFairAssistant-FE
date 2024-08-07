import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ApiService } from '../../services/api.service';
import { AskResponse } from '../../interfaces/api.interfaces';

@Component({
  selector: 'app-ask',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss'],
  providers: [ApiService]
})
export class AskComponent {
  question: string = '';
  response: AskResponse | null = null;

  constructor(private apiService: ApiService) { }

  onAskQuestion(): void {
    this.apiService.askQuestion(this.question).subscribe((response: AskResponse) => {
      this.response = response;
    });
  }
}
