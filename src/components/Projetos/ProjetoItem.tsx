import {ProjetoContainer} from "./styles"

import Link from "next/link"
import {AiOutlineRightCircle} from "react-icons/ai";

export default function ProjetoItem() {
  return (
    <ProjetoContainer>
      <section>
        <div className="overlay"/>
        <div className="text">
          <h1>Projeto 01</h1>
          <h2>- Website</h2>
        </div>
      </section>
      <button type="button">
        <Link href="/projetos">

          <a>
            Ver mais <AiOutlineRightCircle/>
          </a>
        </Link>
      </button>
    </ProjetoContainer>
  )
}
