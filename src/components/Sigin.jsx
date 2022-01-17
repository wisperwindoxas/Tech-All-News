import React from 'react'

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
					<input type="text" placeholder="Имя пользователь" />
					<input type="password" placeholder="Пароль" />
			</div>
			</div>
		</div>
	)
}
