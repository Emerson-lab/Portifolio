import { Container, TextContainer, InfosContainer, CodeItem } from './styles';

import picture from '../../assets/pessoa.webp';
import { useEffect, useState } from 'react';
import { get_User } from '../../services/get';

interface UserProps {
  avatar_url: string;
  name: string;
  company: string;
}

function HomeHero() {
  const [userGit, setUserGit] = useState<UserProps>();

  const userName = userGit?.name;
  const fisrtName = userName?.slice(0, 7);
  const lastName = userName?.slice(7, 17);

  useEffect(() => {
    get_User().then((response) => {
      setUserGit(response?.data)
    })

  }, [])

  return (
    <Container>
      <div className='content-photo'>
        <img src={userGit?.avatar_url} alt="Minha Foto" />
        </div>
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Emerson</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007b'}
            <div>
              Nome: <span className="blue">{fisrtName},</span>
            </div>
            <div>
              Sobrenome: <span className="blue">{lastName}</span>
            </div>
            <div>
              Idade: <span className="blue">{29}</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Cargo</span> {'\u007b'}
            <div>
              Função: <span className="blue">Dev Front-end,</span>
            </div>
            <div>
              Empresa: <span className="blue">{userGit?.company}</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
