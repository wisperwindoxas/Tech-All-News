import React from "react";
import Sections from "./Sections";
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Header() {

  const [showProfile, setShowProfile] = React.useState(false)
  const [users, setUsers] = React.useState([])

  const [filter, setFilter] = React.useState([])


  React.useEffect(() => {
    async function getDataFetch() {
      const response = await axios.get('http://localhost:3004/users')
      setUsers(response.data)

    }



    return getDataFetch()
  }, [])





  function showProfiles() {
    setShowProfile(!showProfile)
  }

  function quit() {
    localStorage.removeItem('user')
  }


  React.useMemo(() => {
    const filtered = users.filter(item => item.userName === localStorage.getItem('user'))
    setFilter(filtered)
  }, [users])



  return (
    <>
      <div className="header" >
        <div className="container">
          <div className="logo">
            
            <Link to={'/'}> <img src="./icons/logotip.png" alt="" /></Link>
          </div>
          <nav className="menu">
            <ul>
             <Link to={'/'}> <li>Главный</li></Link>
              <li>Новости</li>
              <li>Техника</li>
              <li>Игры</li>
              <li>Форум</li>
            </ul>
          </nav>
          {
            localStorage.getItem('user') !== null ?
              <div
                onClick={showProfiles}

                className="userProfile"
              >
                <img src="./icons/user.png" alt="" />
                {filter.map((item) => {
                  return <p key={item.id}>{item.userName}</p>
                })}
                {showProfile ?
                  <div className="profile_block">
                    <ul>
                      <li>Профил</li>
                      <li>Настройка</li>
                     {filter[0].userName === 'windoxas' ? <Link to="/post"><li>Добавить Пость</li></Link>: ""}
                      <li onClick={quit}>Выйти</li>
                    </ul>
                  </div> : ""
                }
              </div>
              :
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
          }
        </div>
      </div>

    
    </>
  );
}
