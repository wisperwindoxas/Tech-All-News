import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
export default function Register() {
	const [currentPassword, setCurrentPassword] = React.useState(false)
	const [currentUserName, setCurrentUserName] = React.useState(false)
	const [currentEmail, setCurrentEmail] = React.useState(false)
	const [isText, setIsText] = React.useState(false)
	const [check, setCheck] = React.useState('')
	const [users, setUsers] = React.useState([])
	const [checkUserName, setCheckUserName] = React.useState([])
	const [checkUserEmail, setCheckUserEmail] = React.useState([])

	const [data, setData] = React.useState('')

	React.useEffect(() => {
		const calendar = new Date()
		setData(`${calendar.getDate()}.0${calendar.getMonth() + 1}.${calendar.getFullYear()}`)

	}, [])

	const firstName = React.useRef(null)
	const lastName = React.useRef(null)
	const userName = React.useRef(null)
	const email = React.useRef(null)
	const password = React.useRef(null)
	const passwordRepeat = React.useRef(null)



	React.useEffect(() => {
		async function getUsers() {
			const response = await axios.get('http://localhost:3004/users')
			setUsers(response.data)
		}

		return getUsers()
	}, [])


	async function RegisterUser() {
		if (password.current.value !== passwordRepeat.current.value) {
			setCheck('пароль не совпадает')
			setCurrentPassword(true)
			setIsText(true)
		} else {
			const response = await axios.post('http://localhost:3004/users', {
				firstName: firstName.current.value,
				lastName: lastName.current.value,
				userName: userName.current.value,
				email: email.current.value,
				password: password.current.value,
				passwordRepeat: passwordRepeat.current.value,
				data: data

			})

			firstName.current.value = "";
			lastName.current.value = "";
			userName.current.value = "";
			password.current.value = "";
			passwordRepeat.current.value = "";

			return response
		}




	}

	React.useEffect(() => {
		const userNameArray = []
		const emailArray = []

		users.forEach(user => {
			userNameArray.push(user.userName)
			emailArray.push(user.email)
			setCheckUserName(userNameArray)
			setCheckUserEmail(emailArray)
		})


		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	function checkForm() {
		if (password.current.value === passwordRepeat.current.value) {
			setCurrentPassword(false)
			setCheck('')
		}
		if (checkUserEmail.includes(email.current.value)) {
			setCheck('email уже существует ')
			setCurrentEmail(true)
			setIsText(true)
		} else if (checkUserName.includes(userName.current.value)) {
			setCheck('Ник уже существует ')
			setCurrentUserName(true)
			setIsText(true)
		} else {
			setCheck('')
			setCurrentUserName(false)
			setIsText(false)
			setCheck('')
			setCurrentEmail(false)
			setIsText(false)
		}

	}



	return (
		<div className='register'>

			<div className="register_wrapper">

				<form action="">
					<h1>Регистиратция</h1>
					{isText ? <span>{check}</span> : ""}
					<input ref={firstName} type="text" placeholder='Фамиля' required={true} autoFocus={true} />
					<input ref={lastName} type="text" placeholder='Имя' required={true} />
					<input
						style={currentUserName ? { border: "3px solid red" } : { border: "0px solid transparent" }}

						ref={userName}
						onChange={() => checkForm()}
						type="text"
						placeholder='Ник'
						required={true}

					/>
					<input
						style={currentEmail ? { border: "3px solid red" } : { border: "none" }}
						ref={email} type="email"
						placeholder='Email'
						required={true}
						onChange={() => checkForm()}
					/>
					<input ref={password} type="password" placeholder='Пароль' required={true} />
					<input
						style={currentPassword ? { border: "3px solid red" } : { border: "none" }}
						ref={passwordRepeat}
						type="password" placeholder='Повторить пароль' required={true}
						onChange={() => checkForm()}

					/>
					<button
						style={isText ? { pointerEvents: "none" } : { pointerEvents: "" }}
						onClick={() => RegisterUser()} className='rgs'>
						<img src="./icons/write.png" alt="" />
						Регистиратция
					</button>
					<Link to="/user">
					<button className='author'>
						<img src="./icons/sign-in.png" alt="" />
						Войти
					</button>
					</Link>
				</form>
			</div>
		</div>
	)
}
