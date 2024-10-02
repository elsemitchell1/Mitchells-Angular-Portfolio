import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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

  constructor(private fb: FormBuilder){
    this.commentForm = this.fb.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
      this.fetchComments();
  }

  fetchComments(){
    this.loading = false;
  }

  onSubmit(){
    if(this.commentForm.valid){
      const newComment = {
        projectName: this.project.name,
        name: this.commentForm.value.name,
        message: this.commentForm.value.message
      };
      this.comments.push(newComment);
      this.commentForm.reset();
      this.showForm = false;
    }
  }

  toggleComments(){
    this.showComments = !this.showComments;
  }
}
