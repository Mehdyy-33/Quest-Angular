import { Component } from '@angular/core';
import { Article } from '../model/article.model';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent {
articleList: Article[] = [
new Article(1, "Article 1"),
new Article(2, "Article 2"),
new Article(3, "Article 3"),

]

constructor(){

}
}
