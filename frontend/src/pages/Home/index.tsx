import React, { useState, FormEvent, useEffect } from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import api from '../../services/api';
import topoPag from '../../assets/topo-pag.svg';
import logo from '../../assets/logo.svg';
import {
  Container,
  ContainerCadastro,
  ContainerListarCadastro,
  TableContainer,
  Rodape,
  Content,
  Header,
  Title,
  Error,
} from './styles';

interface Person {
  id: string;
  name: string;
  email: string;
  phone: string;
  bornDate: string;
  formattedDate: string;
}

const Home: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bornDate, setBornDate] = useState('');
  const [persons, setPersons] = useState<Person[]>([]);
  const [inputError, setInputError] = useState('');
  const [isMobile, setIsMobile] = useState('');

  const verifyDisplay = window.innerWidth <= 765 ? 'mobile' : 'desktop';

  configureAnchors({ offset: 0, scrollDuration: 200 });

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      const response = await api.get('/person');

      const personFormat = response.data.map((person: Person) => ({
        ...person,
        formattedDate: new Date(person.bornDate).toLocaleDateString('pt-BR'),
      }));

      setPersons(personFormat);
      setIsMobile(verifyDisplay);
    }

    loadTransactions();
  }, []);

  async function handleAddPerson(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!name || !email || !phone || !bornDate) {
      setInputError('Preencha todos os campos');
      return;
    }
    try {
      const response = await api.post('/person', {
        name,
        email,
        phone,
        bornDate,
      });

      const formatDate = new Date(response.data.bornDate).toLocaleDateString(
        'pt-BR',
      );

      const person = {
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
        phone: response.data.phone,
        bornDate: formatDate,
        formattedDate: formatDate,
      };

      setPersons([...persons, person]);

      setInputError('');
      setName('');
      setEmail('');
      setPhone('');
      setBornDate('');
    } catch (err) {
      setInputError('Email já cadastrado!');
    }
  }

  return (
    <>
      <ScrollableAnchor id="home">
        <Container>
          <Header>
            <img src={logo} alt="logo" width="100px" />
            {isMobile === 'desktop' && (
              <nav>
                <a href="#cadastro">cadastro</a>
                <a href="#lista">lista</a>
                <a href="#sobremin">sobre min</a>
              </nav>
            )}
          </Header>
          <Title>
            <h1>ESTÁGIO</h1>
            <p>PROVA DE SELEÇÃO</p>
          </Title>
        </Container>
      </ScrollableAnchor>
      <ScrollableAnchor id="cadastro">
        <ContainerCadastro>
          <Content hasError={!!inputError}>
            <h1>Cadastro</h1>
            <form onSubmit={handleAddPerson}>
              <span>Nome</span>
              <input
                type="text"
                value={name}
                onChange={event => setName(event.target.value)}
              />
              <span>Email</span>
              <input
                type="text"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
              <span>Nascimento</span>
              <input
                type="date"
                value={bornDate}
                onChange={event => setBornDate(event.target.value)}
              />
              <span>Telefone</span>
              <input
                type="text"
                value={phone}
                onChange={event => setPhone(event.target.value)}
              />
              <button type="submit">CADASTRAR</button>
            </form>
            {inputError && <Error>{inputError}</Error>}
          </Content>
        </ContainerCadastro>
      </ScrollableAnchor>
      <ScrollableAnchor id="lista">
        <ContainerListarCadastro>
          <h1>Lista de Cadastro</h1>
          <TableContainer>
            <table>
              <thead>
                <tr>
                  <th>NOME</th>
                  <th>EMAIL</th>
                  <th>NASCIMENTO</th>
                  <th>TELEFONE</th>
                </tr>
              </thead>
              <tbody>
                {persons.map(person => (
                  <tr key={person.id}>
                    <td className="title">{person.name}</td>
                    <td>{person.email}</td>
                    <td>{person.formattedDate}</td>
                    <td>{person.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {isMobile === 'desktop' && (
              <a href="#home">
                <img src={topoPag} alt="Topo" />
              </a>
            )}
          </TableContainer>
        </ContainerListarCadastro>
      </ScrollableAnchor>
      <ScrollableAnchor id="sobremin">
        <Rodape>
          <p>Hugo Flausino</p>
          <p>hugo.flausino@hotmail.com</p>
          <p>(31) 98045891</p>
        </Rodape>
      </ScrollableAnchor>
    </>
  );
};

export default Home;
