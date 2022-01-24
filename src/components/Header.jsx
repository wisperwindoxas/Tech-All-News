import React from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Header() {

  const [showProfile, setShowProfile] = React.useState(false)
  const [users, setUsers] = React.useState([])
  const [showMenuMobile, setShowMenuMobile] = React.useState(false)

  const [filter, setFilter] = React.useState([])


  React.useEffect(() => {


  



   
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
            <div className="header_top_block">
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

        
                  <nav className="menu_mobile" style={ showMenuMobile ? 
                    {transform:"translateY(0%)", transition:"0.3s ease-in-out"}
                    :{transform:"translateY(-1000px)", transition:"0.3s ease-in-out"}
                  }>
                    <ul>
                     <Link to={'/'}> <li>Главный</li></Link>
                      <li>Новости</li>
                      <li>Техника</li>
                      <li>Игры</li>
                      <li>Форум</li>
                      <li>
                    
                      <Link className="mobile_auth_btn" to={'/user'}>
                        <button>
                          <img src="./icons/sign-in.png" alt="sign-in" />
                          Вход
                        </button>
                      </Link>
        
                      </li>
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
              </div>
          }

          <div onClick={() => setShowMenuMobile(!showMenuMobile)}  className="mobile_menu">
            <img src="./icons/menu.png" alt="" />
          </div>
            </div>
        </div>
      </div>

    
    </>
  );
}
