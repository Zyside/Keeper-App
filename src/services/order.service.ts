export class OrderService{

  private data: any[] = [];
  getData(): any {

    return this.data;
  }
  addData(item){

    this.data.push(item);
  }
  private time:string = '';
  getTime():any {
    return this.time;
  }
}

