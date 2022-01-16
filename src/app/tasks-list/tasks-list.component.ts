import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Task } from '../interfaces/task';

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'description', 'receivedDate', 'assignedTo', 'status', 'priority'];
  public dataSource: Task[] = [];

  constructor(private api: ApiService) { 
    
  }

  async ngOnInit(): Promise<void> {
    this.dataSource = await this.api.getTasks() 
    console.log(await this.api.getTasks())
  }
}
