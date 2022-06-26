import { Container } from './styles';

import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';


import imgProjectPlataform from '../../assets/event-plataform-img.png'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { get_Repos } from '../../services/get';

function Projetos() {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    get_Repos().then(response => {
      setRepo(response.data)
    })
  },[])

  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />

      <section>
        <ProjetoItem
          img={imgProjectPlataform}
          title={repo[8]?.name}
          type="Website"
          slug="event-platarform"
        />
    
 
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projetos;
