import { ProjetoContainer } from '../../styles/ProjetosStyles';

import Header from '../../components/Header';
import ProjetoItem from '../../components/ProjetoItem';
import { useEffect, useState } from 'react';
import { get_Repos } from '../../services/get';

import imgEventPlataform from '../../assets/event-plataform-img.png';
// import imgWorldTrip from '../../assets/world-trip.png';

export default function Projetos() {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    get_Repos().then(response => {
      setRepo(response.data)
      // console.log(repo)
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
        {/* <ProjetoItem
          title="World Trip"
          type="Website"
          img={imgWorldTrip}
          slug="world-trip"
        /> */}
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
