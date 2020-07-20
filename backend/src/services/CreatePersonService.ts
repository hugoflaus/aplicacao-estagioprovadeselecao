import Person from '../models/Person';
import PersonRepository from '../repositories/PersonsRepository';

interface Request{
  name: string;
  email: string;
  phone: string;
  bornDate: Date;
}

class CreatePersonService{

  private personRepository: PersonRepository;

  constructor(personRepository: PersonRepository){
    this.personRepository = personRepository;
  }

  public execute({ name, email, phone, bornDate}: Request): Person{
    const findPerson = this.personRepository.findByEmail(email);

    if(findPerson){
      throw Error('Email já cadastrado!');
    }

    const person = this.personRepository.create({
      name,
      email,
      phone,
      bornDate
    });

    return person;
  }
}

export default CreatePersonService;
