import './Footer.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';


export default function () {

    return (
        <div className='footer'>
            <div className='line'>

                <div className='social'>
                    <SocialIcon url="https://t.me/WhoDatBoy66" />
                </div>
                <div className='social'> 
                    <SocialIcon url="https://github.com/Nick0070" /> 
                </div>
                <div className='copirate'>
                    copyright 2023 © 
                </div>

                <div className='inf'>
                    Design by Nick
                </div>
            
            
            </div>

            
        </div>
    );
}




