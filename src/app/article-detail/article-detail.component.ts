import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from '../model/article.model';
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit{
  articleID: number = 0;
  myArticle!: Article;
  articleList: Article[] = [
    new Article(1, "Article 1"),
    new Article(2, "Article 2"),
    new Article(3, "Article 3"),
    
    ];
constructor(private route: ActivatedRoute){

}

ngOnInit(): void{
  this.route.paramMap.subscribe((params: ParamMap) => {

    if(params.get("id") ){
      this.articleID = parseInt(params.get("id") as string);
      console.log(this.articleID);
      this.myArticle = this.articleList.find(article => article.id === this.articleID) as Article;
    }
  })
}
}
