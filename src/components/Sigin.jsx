import React, {useState, useEffect, useRef} from 'react'
import axios from  'axios'
import {Link} from 'react-router-dom'
export default function Sigin() {

	const [users, setUsers] = useState([])
	const [checkUserName, setCheckUserName] = useState(false)
	const [checkUserPassword, setCheckUserPassword] = useState(false)
	const [isText, setIsText] = useState('')
	const userName = useRef(null)
	const password = useRef(null)
	useEffect(() => {
		async function getFetchData(){
			const response = await axios.get('http://localhost:3004/users');
			setUsers(response.data)
			
		}

		return getFetchData()
	}, [])

	function checkUser(){
		if(userName.current.value === ""){
			setCheckUserName(true)
		}
		if(password.current.value === ""){
			setCheckUserPassword(true)
		}
		
		const userNameArray = []
		const passwordArray = []
		users.forEach(item => {
			userNameArray.push(item.userName)
			passwordArray.push(item.password)
		})

		if(userNameArray.includes(userName.current.value)){
			if(passwordArray.includes(password.current.value)){
				localStorage.setItem("user", userName.current.value)
				window.open('/')
				
			}else{
				setIsText('неправильное пароль')
				setCheckUserPassword(true)
				
			}
		}else{
			setIsText('неправильное имя пользователя')
			setCheckUserName(true)
		}
		
	}


	function checkInput(){
		if(userName.current.value !== " "){
			setCheckUserName(false)
			setIsText('')
		}
		if(password.current.value !== " "){
			setCheckUserPassword(false)
			setIsText('')
		}
	}


	return (
		<div className="sign-in">
			<h1>ВХОД</h1>
			<div className="sign__wrapper">
			<div className="photo">
				<img src="./icons/idea.png" alt="" />
			</div>
			<div className="sign-in_block">
					<img src="./icons/think.png" alt="" />
					<span>{isText}</span>
					<input 
					ref={userName} 
					type="text" 
					placeholder="Имя пользователь"
					onChange={() => checkInput()}
					required={true}
					style={checkUserName ? {border:"2px solid red"} : {border:"2px solid transparent"}}
					/>
					
					<input 
					ref={password} 
					type="password" 
					placeholder="Пароль" 
					required={true} 
					onChange={() => checkInput()}
					style={checkUserPassword ? {border:"2px solid red"} : {border:"2px solid transparent"}}
					/>
					<div className='auth_btn'>
						<Link to="/register">
							<button className='registerBtn'>Регистиратция</button>
						</Link>
					<button onClick={() => checkUser()} className='auth'>Вход</button>
						
					</div>
			</div>
			</div>
		</div>
	)
}
