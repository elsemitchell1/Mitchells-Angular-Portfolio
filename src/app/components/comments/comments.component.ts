import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {
  @Input() project: any;
  comments: any[] = [];
  showForm = false;
  showComments = false;
  loading = true;
  commentForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient){
    this.commentForm = this.fb.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
      this.fetchComments();
  }

  fetchComments(){
    this.http.get<any[]>(`https://portfolio-server-yqaw.onrender.com/comments/${this.project.name}`)
    .subscribe({
      next: (data) => {
        this.comments = data;
        this.loading = false;
      },
      error: (error) => {
        console.error(error);
        this.loading = false;
      }
    });
  }

  onSubmit(){
    if(this.commentForm.valid){
      const newComment = {
        projectName: this.project.name,
        name: this.commentForm.value.name,
        message: this.commentForm.value.message
      };
      this.http.post('https://portfolio-server-yqaw.onrender.com/comments', newComment)
      .subscribe({
        next: (data) => {
          this.comments.push(data);
          this.commentForm.reset();
          this.showForm = false;
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  }

  toggleComments(){
    this.showComments = !this.showComments;
  }
}
