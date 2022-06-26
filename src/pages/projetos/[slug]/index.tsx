import { ProjetoContainer } from '../../../styles/ProjetoStyles';

import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';

import imgEventPlataform from "../../../assets/event-plataform-img.png"

export default function Projeto() {
  return (
    <ProjetoContainer>
      <Header />
      <BannerProjeto
        title="Events Plataform"
        type="website"
        img={imgEventPlataform}
      />

      <main>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus, est accusantium! Modi veritatis rem, nisi voluptate
          officia iusto nobis libero similique aliquam beatae architecto amet
          doloremque eius magnam minima alias expedita, tempore unde! Eius quos
          ducimus, aliquid nemo neque quia molestias reiciendis distinctio
          reprehenderit, similique maiores autem necessitatibus doloribus.
          Nesciunt at doloribus exercitationem numquam placeat debitis, iste,
          blanditiis veniam quis ipsam expedita nisi odit voluptates, vitae
          tempore sed minima perspiciatis architecto accusamus fugiat
          voluptatibus repellat. Nulla quo dicta soluta sapiente!
        </p>
        <button type="button">
          <a href="https://event-plataform-tau.vercel.app/">Ver projeto online</a>
        </button>
      </main>
    </ProjetoContainer>
  );
}
