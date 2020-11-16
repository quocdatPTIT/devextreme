import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { kanbanData } from './data';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('kanbanObj') kanbanObj: KanbanComponent;
  public kanbanData: object[] = extend([], kanbanData, null, true) as object[];
  public cardSettings: CardSettingsModel = {
    contentField: 'Summary',
    headerField: 'Id',
    // tagsField: 'Tags',
    grabberField: 'Color',
    footerCssField: 'ClassName'
  };

  OnActionComplete(args) {
    console.log(args);
  }
}
