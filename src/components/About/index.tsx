import React from 'react';
import { ContainerAbout, Image, SubContainerAbout, SubTitle, Description, ContainerButtons, ContactButton, TextButton } from './styles';

import photo from '../../assets/photo.jpg';

interface Props {
    toggleTheme(): void;
}

const About: React.FC<Props> = () => {

    return (
        <ContainerAbout id="sobre">
            <Image style={{borderRadius: '14px'}} src={photo} alt="Gustavo Silva" />

            <SubContainerAbout>
                <SubTitle>
                    Sobre mim
                </SubTitle>

                <Description>
                    Comecei minha jornada na programação em 2021, criando sites para passar o tempo. Em 2022, entrei na faculdade e hoje possuo 2 anos de experiência profissional.
                </Description>
                <Description>
                    Atualmente tenho experiência com linguagens/frameworks como: Javascript, TypeScript, React, React Native, NodeJS, entre outras tecnologias que utilizo para desenvolver aplicações web/mobile de alto nível e valor.
                </Description>
                <Description>
                    Meu foco é aprender novas coisas e aprimorar ainda mais as habilidades que possuo, gosto sempre de estar em constante aprendizado e evoluindo dia após dia, e agregando muito valor.</Description>
                <ContainerButtons>
                    <ContactButton href="#contato">
                        <TextButton>
                            Contato
                        </TextButton>
                    </ContactButton>
                </ContainerButtons>
            </SubContainerAbout>
        </ContainerAbout>
    );
}

export default About;