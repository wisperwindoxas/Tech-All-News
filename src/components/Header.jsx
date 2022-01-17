import React from "react";
import Sections from "./Sections";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="header">
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
            <Link to={'/user'}>
              <button>
                <img src="./icons/sign-in.png" alt="sign-in" />
                Вход
              </button>
            </Link>
            <Link to="/register">
            <button>
                <img src="./icons/write.png" alt="register" />
                Регистиратция
            </button>
            </Link>
          </div>
        </div>
      </div>

      <Sections />
    </>
  );
}
