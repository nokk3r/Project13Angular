export interface MyWorker {
    name: string;
    surname: string;
    type: number;
    id?: number;
    number: string;
}
export enum MyWorkerType {
    programmer,
    designer,
    copywritter,
    manager,
}
 export let MyWorkersDatabase: MyWorker[] = [
   {id: 1, name: 'Вячеслав', surname: 'Самсонов', type: 0, number: '+7(984)321-11-22'},
   {id: 5, name: 'Реагин', surname: 'Туров', type: 0, number: '+7(987)123-11-22'},
   {id: 2, name: 'Илон', surname: 'Маск', type: 1, number: '+7(987)542-41-55'},
   {id: 3, name: 'Геннадий', surname: 'Горин', type: 2, number: '+7(914)111-14-14'},
   {id: 4, name: 'Иванов', surname: 'Рибук', type: 3, number: '+7(945)523-67-32'},
 ];
