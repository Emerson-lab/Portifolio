import { Container } from './styles';

import SectionTitle from '../SectionTitle';
import Form from './Form';

function FormContato() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Precisa dos
            <br />
            meus serviços?
          </>
        }
        description={
          <>
            Preencha o formulário abaixo que
            <br />
            irei retornar e breve
          </>
        }
      />
      <Form />
    </Container>
  );
}

export default FormContato;
