
import './Header.scss';
import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function () {
   
    return (
        <div className='header'> 
            <div className='information'> 

                    <div className='logo'>
                        <img  src='img/logo.png'/>
                        {/* <div className='glitch'> Nick Web Development </div> */}
                    </div>

                    <div className='buttongruop'>
                        <ButtonGroup variant="secondary" aria-label="medium secondary button group">
                                <Button className='button' href="/" >Главная</Button>
                                <Button className='button' href="Works" >Мои работы </Button>
                                <Button className='button' href="Information" >Информация</Button>
                        </ButtonGroup>
                    </div>
            </div>

        </div> 
    );
}
