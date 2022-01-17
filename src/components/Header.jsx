import React from 'react'
import Sections from './Sections'

export default function Header() {
    return (
        <>
            <div className='header'>
                <div className="container">
                    <div className="logo">
                        <img src="./icons/logotip.png" alt="" />
                    </div>
                    <nav className="menu">
                        <ul>
                            <li>Главный</li>
                            <li>Новости</li>
                            <li>Техника</li>
                            <li>Игры</li>
                            <li>Форум</li>
                        </ul>
                    </nav>
                    <div className="sign__register">
                        <button>
                            <img src="./icons/sign-in.png" alt="sign-in" />
                            Вход
                        </button>
                        <button>
                            <img src="./icons/write.png" alt="register" />
                            Регистиратция
                        </button>
                    </div>
                </div>
            </div>

            <Sections />
        </>
    )
}
