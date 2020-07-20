import { uuid } from 'uuidv4';

class Person{

  id: string;

  name: string;

  email: string;

  phone: string;

  bornDate: Date;

  constructor({ name, email, phone ,bornDate }: Omit<Person, 'id'>){
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.bornDate = bornDate;
  }

}

export default Person;
