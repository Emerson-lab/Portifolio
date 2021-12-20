import { Container } from './styles';

import NavLink from './NavLink';

function Header(){
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/"/>
        <NavLink title="Projetos" path="/projetos" includes/>
      </ul>

    </Container>
  );
};

export default Header;
