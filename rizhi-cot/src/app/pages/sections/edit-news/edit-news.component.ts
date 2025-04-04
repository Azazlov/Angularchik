import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { newsItem } from 'src/app/@theme/components/menu/models/news.model';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class NewsEditComponent implements OnInit {
  @Input() newsData!: newsItem; // Входные данные для редактирования

  newsForm!: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.newsForm = this.fb.group({
      newsName: [this.newsData?.newsName || '', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ]],
      newsDescription: [this.newsData?.newsDescription || '', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500)
      ]],
      newsImg: [this.newsData?.newsImg || '', Validators.required],
      newsEnable: [this.newsData?.newsEnable || false]
    });
  }

  onSubmit(): void {
    if (this.newsForm.invalid) {
      this.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    
    const updatedNews: newsItem = {
      newsId: this.newsData.newsId,
      ...this.newsForm.value
    };

    // Здесь должен быть вызов сервиса для сохранения
    console.log('Updated news:', updatedNews);
    
    // Имитация запроса
    setTimeout(() => {
      this.isSubmitting = false;
      alert('Новость успешно обновлена!');
    }, 1000);
  }

  private markAllAsTouched(): void {
    Object.values(this.newsForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  get f() {
    return this.newsForm.controls;
  }
}