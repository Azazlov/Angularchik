import { Component } from '@angular/core';
import { newsItem } from 'src/app/@theme/components/menu/models/news.model';
import { newNewsItem } from 'src/app/@theme/components/menu/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  newsData =  new newNewsItem();
  newItems: newsItem[] = this.newsData.newsItems;
}
