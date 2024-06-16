import React from 'react';
import { ContainerAbout, SubtitleContainer, SubTitle, ContainerTech, BoxTech, TextTech } from './styles';

import TechnologiesData from '../../technologies';

import { ImRadioChecked } from "react-icons/im";

interface Props {
    toggleTheme(): void;
}

const Technologies: React.FC<Props> = () => {

    return (
        <ContainerAbout>
            <SubtitleContainer>
                <SubTitle>
                    Linguagens e tecnologias
                </SubTitle>
            </SubtitleContainer>
            <ContainerTech>
                {TechnologiesData.map((item)=>{
                    const { id, name } = item;
                    return(
                        <BoxTech key={id}>
                            <ImRadioChecked color="#37D892" size={30}/>
                            <TextTech>{name}</TextTech>
                        </BoxTech>
                    );
                })}        
            </ContainerTech>
        </ContainerAbout>
    );
}

export default Technologies;