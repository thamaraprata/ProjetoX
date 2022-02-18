import React from 'react';
import styled from 'styled-components';
import BgImg from '../assets/bg-image2.jpg'
//import {MdKeyboardArrowRigh} from 'react-icons/md';

const Section = styled.section`
    background-image: url(${BgImg});
    height: 785px;
    display: flex;
    background-repeat: no-repeat;
    background-size:cover;

`;

const Content = styled.div`
    width: 100%
    height: 100px;
`;
const Letf = styled.div`
    padding-left: 220px;
    padding-top: 143px;

`;
const Title = styled.p`
    font-size: 55px;
    color: white;
    font=weight: 400;
`;
const Desc = styled.p`
    width:472px;
    color: white;
    line-height: 30px;
    margin-top: 58px; 
`;
const Button = styled.a`
    display: flex;
    justify-content: center; 
    align-items: center;
    border-radius: 18px; 
    margin-top: 58px; 
    width: 371px;
    height: 71px;
    line-height: 71px; 
    font-size: 22px; 
    text-align: center; 
    color: #fff; 
    cursor: pointer; 
    background: linear-gradient(98deg, #20bf55, #01baef); 
    text-decoration: none;
    box-shadow: 0 15px 14px rgb(0 42 177 / 12%);


`;


const Hero = () => {
    return (
        <Section>
            <Content>
                <Letf>
                    <Title>
                        Get 2 FREE Stocks <br/> valued up to $1850!
                    </Title>
                        <Desc>
                            Open and funk a brokerange account will $100 or more and you will have 
                            and you will have a chance of claming stocks links <span>
                                GOOG, FB, SBUX</span>{' '}
                                and more!
                            
                        </Desc>
                        <Button href='https://bit.ly/webull-join' target='blank'> 
                            <span>Claim your free stocks now</span>
                         
                        </Button>
                    
                </Letf>
            </Content>
        </Section>
    );
};

export default Hero
