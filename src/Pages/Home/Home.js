import './Home.scss';
import React from 'react';
import Avatar from '@mui/material/Avatar';



export const Home = () => {
    
  
    return (
        <div className='home'>


            <div className='left'>
                <div className='avatar'>
                    <Avatar sx={{ width: 250, height: 250 }} src="img/photo.jpg" className='ava'/>
                </div>
                <div className='text'>
                    <div className='text2'>Меня зовут Никита</div> 
                    <div className='text3'>Веб разработчик</div> 
                    <div className='text4'>Сделаю Ваш сайт за короткий срок</div>
                </div>
                <div className='button'>
                    <a href = 'Works' >
                    <button className='button2'>Мои работы</button>
                    </a>
                </div>
            </div>
            <div className='right'>

            <div className='box'>
                <div className='box2'>
                    <div className='text1'>
                        Прайс лист
                    </div>

                    <div className='box3'>
                        <div className='boxing'>
                            <div className='text2' > Лендинг page - 15.000 ₽ </div>
                        </div>
                        <div className='boxing'>
                                <div className='text2'> Сайт под ключ - 30.000 ₽ </div>
                            
                        </div>
                        <div className='boxing'>
                                <div className='text2'> Сайт с каталогом - 50.000 ₽ </div>
                        </div>
                    </div>
                </div>
            </div>














{/* 
                <div className='box'>
                    <div className='box2'>
                        <div className='text1'>
                            Свяжусь с вами
                        </div>

                        <div className='box3'>
                            <div className='boxing'>
                                <div className='text2' > Ваша почта - </div>

                                <div className='textfield'>  <TextField color='primary' label="" variant="standard"/> </div>
                            </div>
                            <div className='boxing'>
                                    <div className='text2'> Ваше ФИО - </div>
                                <div className='textfield'>  <TextField color='primary' label="" variant="standard"/> </div>
                            </div>

                            <button className='button2'>Отправить</button>
                        </div>

                    </div>
                </div> */}


            </div>



        </div>

        
    )
}