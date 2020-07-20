import Person from "../models/Person";

interface CreatePersonDTO{
  name: string;
  email: string;
  phone: string;
  bornDate: Date;
}

class PersonRepository{
  private persons: Person[];

  constructor(){
    this.persons = [];
  }

  public all(): Person[] {
    return this.persons;
  }

  findByEmail(email: string): Person | null{
    const findPerson = this.persons.find(person => person.email == email);

    return findPerson || null;
  }

  public create({ name, email, phone, bornDate }: CreatePersonDTO): Person{
    const person = new Person({ name, email, phone, bornDate });

    this.persons.push(person);

    return person;
  }
}

export default PersonRepository;
