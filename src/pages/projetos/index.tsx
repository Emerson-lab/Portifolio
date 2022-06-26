import { ProjetoContainer } from '../../styles/ProjetosStyles';

import Header from '../../components/Header';
import ProjetoItem from '../../components/ProjetoItem';
import imgEventPlataform from '../../assets/event-plataform-img.png'
import { useEffect, useState } from 'react';
import { get_Repos } from '../../services/get';

export default function Projetos() {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    get_Repos().then(response => {
      setRepo(response.data)
    })
  },[])
  return (
    <ProjetoContainer>
      <Header />
      <main className="container">
        <ProjetoItem
          title={repo[8]?.name}
          type="Website"
          img={imgEventPlataform}
          slug="event-plataform"
        />
        <ProjetoItem
          title="Projeto 01"
          type="Website"
          img="https://www.visus360.com.br/wp-content/uploads/2021/05/types-of-websites.jpg"
          slug="teste"
        />
        <ProjetoItem
          title="Projeto 01"
          type="Website"
          img="https://www.visus360.com.br/wp-content/uploads/2021/05/types-of-websites.jpg"
          slug="teste"
        />
        <ProjetoItem
          title="Projeto 01"
          type="Website"
          img="https://www.visus360.com.br/wp-content/uploads/2021/05/types-of-websites.jpg"
          slug="teste"
        />
      </main>
    </ProjetoContainer>
  );
}
