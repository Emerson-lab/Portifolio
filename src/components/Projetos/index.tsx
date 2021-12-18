import { Container } from './styles';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';

function Projetos() {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos"/>

      <section>
        <ProjetoItem/>
      </section>
    </Container>
  );
};

export default Projetos;
