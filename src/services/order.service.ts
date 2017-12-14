export class OrderService{

  private data: any = [];

  getData(): any {

    return this.data;
  }

  addData(item){

    this.data.push(item);
  }


  private status:any='';

  getStatus():any {

    return this.status;

  }

  addStatus(item){

    this.status = item;

  }
}

