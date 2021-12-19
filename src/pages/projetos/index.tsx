import Header from '../../components/Header';
import ProjetoItem from '../../components/ProjetoItem';
import { ProjetoContainer } from '../../styles/ProjetosStyles';

export default function Projetos() {
  return (
    <ProjetoContainer>
      <Header />
      <main className="container">
        <ProjetoItem
          title="Projeto 01"
          type="Website"
          imgUrl="https://www.visus360.com.br/wp-content/uploads/2021/05/types-of-websites.jpg"
          slug="teste"
        />
        <ProjetoItem
          title="Projeto 01"
          type="Website"
          imgUrl="https://www.visus360.com.br/wp-content/uploads/2021/05/types-of-websites.jpg"
          slug="teste"
        />
        <ProjetoItem
          title="Projeto 01"
          type="Website"
          imgUrl="https://www.visus360.com.br/wp-content/uploads/2021/05/types-of-websites.jpg"
          slug="teste"
        />
        <ProjetoItem
          title="Projeto 01"
          type="Website"
          imgUrl="https://www.visus360.com.br/wp-content/uploads/2021/05/types-of-websites.jpg"
          slug="teste"
        />
      </main>
    </ProjetoContainer>
  );
}
