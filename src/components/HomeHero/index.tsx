import { Container, TextContainer } from './styles';
import picture from '../../assets/pessoa.webp'

function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Minha Foto"/>
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Emerson</h2>
        </TextContainer>
      </div>
    </Container>
  );
};

export default HomeHero;
