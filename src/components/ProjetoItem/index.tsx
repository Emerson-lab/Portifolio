import { Container } from './styles';

import Link from "next/link";

interface ProjetoItemProps {
  title: string;
  type: string;
  img: string;
  slug: string;
}

function ProjetoItem({ title, type, img, slug }: ProjetoItemProps) {
  return (
    <Container img={img}>
      <Link href={`/projetos/${slug}`}>
        <a>
          <div className="overlay"/>
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </Container>
  );
};

export default ProjetoItem;
