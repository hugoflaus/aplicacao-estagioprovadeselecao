import { Router, request } from 'express';
import { parseISO } from 'date-fns';

import PersonRepository from '../repositories/PersonsRepository';
import CreatePersonService from '../services/CreatePersonService';

const personRouter = Router();
const personRepository = new PersonRepository();

personRouter.get('/', (request, response)=>{
  const persons = personRepository.all();

  return response.json(persons);
});


personRouter.post('/',(request, response) =>{

  try {
    const { name, email, phone, bornDate} = request.body;

    const parseBornDate = parseISO(bornDate);

    const createPerson = new CreatePersonService(personRepository);

    const person = createPerson.execute({ name, email, phone, bornDate:parseBornDate })

    return response.json(person)
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }

});

export default personRouter;
