
import './Information.scss';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';

export const Information = () => {
    
    return (

        <div className='information'>
            <div className='inf'>
                <div className='inf2'>
                    <div className='avatar'>
                        <Avatar sx={{ width: 250, height: 250 }} src="img/photo.jpg" className='ava'/>
                    </div>
                    <div className='text'>
                        <div className='text2'>Меня зовут Никита</div> 
                        <div className='text3'>Веб разработчик</div> 
                        <div className='text4'>Сделаю Ваш сайт за короткий срок</div>
                    </div>
                </div>
               
                <div className='right3'>
                  <div className='right'>
                        <div className='text'>Используемый стек технологий </div>
                        <div className='stek'>
                            <img className='img' src='img/mt.png'/>
                            <img className='img' src='img/react.png'/>
                            <img className='img' src='img/scss.png'/>
                            <img className='img' src='img/html.png'/>
                            <img className='img' src='img/css.png'/>
                        </div>

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
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}