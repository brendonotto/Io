import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/src/client';

import { IShow } from '../models/show.interface';

@Injectable()
export class JbApiService {
  private rootUrl = 'http://jupitercolony.rocks/api/jupiterbroadcasting/';
  private url: string;
  private show: IShow;

  constructor(private http: HttpClient, private isCurrent: boolean, private showName: string) { }

  private buildRequestUrl(): string {
    this.url = this.rootUrl + this.isCurrent ? 'current' : 'archive' + '/' + this.showName;
    return this.url;
  }

  getShowData(): IShow {
    this.http.get(this.buildRequestUrl())
      .subscribe(
        data => {
          const rss = data['rss'];

          return {
            title: rss.channel.title,
            link: rss.channel.link[0],
            description: rss.channel.description,
            imageUrl: rss.channel.image[0].url,
            summary: rss.channel.summary,
            keywords: rss.channel.keywords[0]
          };
        },
        err => {
          console.log(`Show data not retrieved! Error: ${err.error}`);
        }
      );
  }
}
