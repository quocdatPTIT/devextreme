import { Component } from '@angular/core';
import { Service } from './app.service';
@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service],
  preserveWhitespaces: true
})
export class AppComponent {
  lists: any[] = [];
  statuses: string[] = [
    'Not Started',
    'Need Assistance',
    'In Progress',
    'Completed'
  ];
  employees: object = {};

  constructor(service: Service) {
    const tasks = service.getTasks();

    service.getEmployees().forEach((employee) => {
      this.employees[employee.ID] = employee.Name;
    });

    this.statuses.forEach((status) => {
      this.lists.push(tasks.filter((task) => task.Task_Status === status));
    });
  }

  onListReorder(e): void {
    const list = this.lists.splice(e.fromIndex, 1)[0];
    this.lists.splice(e.toIndex, 0, list);

    const status = this.statuses.splice(e.fromIndex, 1)[0];
    this.statuses.splice(e.toIndex, 0, status);
  }

  onTaskDragStart(e): void {
    e.itemData = e.fromData[e.fromIndex];
  }

  onTaskDrop(e): void {
    e.fromData.splice(e.fromIndex, 1);
    e.toData.splice(e.toIndex, 0, e.itemData);
  }
}
