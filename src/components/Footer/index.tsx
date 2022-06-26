import { Container } from './styles';

import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin
} from 'react-icons/ai';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          {/* <AiOutlineTwitter
            onClick={() => handleRedirect('https://twitter.com')}
          /> */}
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/Emerson-lab')}
          />
          <AiFillLinkedin
            onClick={() => handleRedirect('https://www.linkedin.com/in/emerson-trindade-387209209/')}
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;
