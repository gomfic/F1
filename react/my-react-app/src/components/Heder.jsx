import '../App.css'
import { Link } from 'react-router-dom'

function Heder() {
    return (
        <>
            <header>
                <img className="logo" src="https://www.redbull.com/v3/resources/images/client/header/redbullcom-logo_double-with-text.svg" />
                <nav>
                    <a href="">Главная</a>
                    <Link to="/products">Продукция</Link>
                    <a href="#">Команды</a>
                    <a href="#">Контакты</a>
                </nav>
                <h1 className="jjjj">Найцікавіше про Формулу-1</h1>
            </header>
        </>
    )
}

export default Heder

