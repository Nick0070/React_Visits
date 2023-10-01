import './Layouts.scss';
import  Footer  from '../Footer/Footer';
import  Header  from '../Header/Header';


export const MainLayout = (props) => {
    return (
        <div className='main-layout'>
            <Header/>
                {props['children']}
            <Footer/>
        </div>
    )
}