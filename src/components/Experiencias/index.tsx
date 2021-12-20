import { Container } from './styles';

import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="05 Anos" description="de experiência" />

      <section>
        <ExperienciaItem
          year="2021"
          title="Dev Fron-end"
          description="Lorem ypsum dolor sit ammoe, consecrtur adipliling elit. Al,iquam"
        />
        <ExperienciaItem
          year="2021"
          title="Dev Fron-end"
          description="Lorem ypsum dolor sit ammoe, consecrtur adipliling elit. Al,iquam"
        />
        <ExperienciaItem
          year="2021"
          title="Dev Fron-end"
          description="Lorem ypsum dolor sit ammoe, consecrtur adipliling elit. Al,iquam"
        />
        <ExperienciaItem
          year="2021"
          title="Dev Fron-end"
          description="Lorem ypsum dolor sit ammoe, consecrtur adipliling elit. Al,iquam"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
