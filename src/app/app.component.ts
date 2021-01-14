import { Component } from '@angular/core';
import { MyWorker, MyWorkersDatabase, MyWorkerType } from './shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Список сотрудников';

  workers: MyWorker[] = MyWorkersDatabase;
  myWokerType = MyWorkerType;
  
  getByType(type: number) {
    return this.workers.filter(worker => worker.type === type)
  }
  onDeleteWorker(id: number) {
    console.log(id);
    let index = this.workers.findIndex((worker) => worker.id === id);
    if (index !== -1) {
      this.workers.splice(index, 1);
    }
  }
  onAddworker (worker: MyWorker) {
    let id = this.workers.length > 0  
    ? this.workers[this.workers.length - 1].id + 1 
    : 0;
    worker.id = id;
    this.workers.push(worker);
  }
  onEditWorker(editingWorker){
    const workerId = this.workers.findIndex(worker => worker.id === editingWorker.id);
    (this.workers)[workerId].name = editingWorker.name;
    (this.workers)[workerId].surname = editingWorker.surname;
    (this.workers)[workerId].number = editingWorker.number;
  }
}
