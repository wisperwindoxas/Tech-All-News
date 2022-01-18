import React from 'react'
import {Link} from 'react-router-dom'
export default function Sigin() {
	return (
		<div className="sign-in">
			<h1>ВХОД</h1>
			<div className="sign__wrapper">
			<div className="photo">
				<img src="./icons/idea.png" alt="" />
			</div>
			<div className="sign-in_block">
					<img src="./icons/think.png" alt="" />
					<input type="text" placeholder="Имя пользователь" required={true}/>
					<input type="password" placeholder="Пароль" required={true} />
					<div className='auth_btn'>
						<Link to="/register">
							<button className='registerBtn'>Регистиратция</button>
						</Link>
					<button className='auth'>Вход</button>
						
					</div>
			</div>
			</div>
		</div>
	)
}
