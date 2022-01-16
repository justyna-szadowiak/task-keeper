import { Injectable } from '@angular/core';
import { Task } from './interfaces/task';

import data from '../data/data.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  
  getTasks(): Promise<Task[]> {
    return new Promise((resolve, reject) => {
      resolve(data.response.data);
    })
  }
  
}
