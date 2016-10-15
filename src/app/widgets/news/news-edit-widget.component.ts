import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';

import { WidgetContext } from '../../dashboard/widget.context';
import { Widget } from '../../dashboard/widget';

import { NewsService } from './news.service';
import { NewsConfiguration } from './news.configuration';

@Component({
  templateUrl: 'news-edit-widget.component.html',
  styleUrls: ['news-edit-widget.component.css']
})
export class NewsEditWidgetComponent implements OnInit {

  configuration: NewsConfiguration;

  constructor(
    private context: WidgetContext
  ){
    this.configuration = context.getConfig();
  }

  ngOnInit(){
  }

  save() {
    // TODO modify original configuration here, not before
    this.context.configChanged(this.configuration);
  }

}
