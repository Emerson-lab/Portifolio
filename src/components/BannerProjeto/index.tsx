import { Container } from './styles';

interface BannerProjetoProps {
  title: string;
  type: string;
  img: string;
}

function BannerProjeto({ title, type, img }: BannerProjetoProps) {
  return (
    <Container img={img}>
      <div className="overlay" />
      <section>
        <h1>{title}</h1>
        <h2>{type}</h2>
      </section>
    </Container>
  );
}

export default BannerProjeto;
