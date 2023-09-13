import Head from 'next/head';
import Image from 'next/image';
import logo from '@/public/img/logo.svg';
import { useState } from 'react';
//npm i react-hook-form
import { useForm, SubmitHandler } from 'react-hook-form';

interface Inputs {
	email: string;
	password: string;
}

function Login() {
	const [Login, setLogin] = useState<boolean>(false);
	const {
		register, //원하는 input요소에 전개연산자로 등록해서 값 관리
		handleSubmit, //submit이벤트 발생 시 register에 등록된 input값들의 인증처리 함수, 인증 완료시 처리할 추가작업의 함수를 콜백으로 등록가능
		formState: { errors }, //인증 실패시 커스텀 에러메세지를 등록할 숭수 있는 객체
	} = useForm<Inputs>();

	//handleSubmit함수이 인증처리 완료시 동기적으로 실행될 콜백함수 등록
	//해당 콜백함수는 인증에 성공했을만 호출: 인수로 전달되는 값은 관리되고 있는 form의 value값
	const join: SubmitHandler<Inputs> = ({ email, password }) => {
		if (Login) {
			//Sign In 버튼 클릭시 처리할 구문
			console.log('sign in 클릭');
		} else {
			//Sign Up 버튼 클릭시 처리할 구문
			console.log('sign up 클릭');
		}
	};

	return (
		<main className='relative flex w-full h-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
			<Head>
				<title>Nextflix Member</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Image
				src='https://rb.gy/p2hphi'
				fill
				priority
				className='z-10 opacity-60 hidden md:inline object-cover'
				alt='login'
			/>

			<Image
				width={150}
				height={150}
				src={logo}
				alt='logo'
				className='absolute left-4 top-4 cursor-pointer md:left-10 md:top-6 z-10'
				sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
			/>

			<form
				onSubmit={handleSubmit(join)} //submit이벤트가 발생시 handleSubmit이 인증처리를 해주고 인증의 결과값을 등록된 콜백함수에 전달
				className='relative z-50 mt-24 space-y-8 rounded bg-black/70 py-10 px-6 md:mt-0 md:max-w-md md:px-14'
			>
				<h1 className='text-4xl font-semibold'>Sign In</h1>

				<div className='space-y-4'>
					<input
						type='email'
						placeholder='Email'
						className='input'
						{...register('email', { required: true, minLength: 7, maxLength: 20 })}
					/>
					{errors.email && <span>Please enter a valid Email</span>}
					<input
						type='password'
						placeholder='Password'
						className='input'
						{...register('password', { required: true, pattern: /[a-zA-Z]+/, minLength: 4, maxLength: 20 })}
					/>
					{errors.password && <span>Please enter a valid Password</span>}
				</div>

				<button className='w-full rounded bg-[#e40914] py-3 font-semibold' onClick={() => setLogin(true)}>
					Sign In
				</button>

				<div className='text-[gray]'>
					New to Nextflix?
					<button className='text-white ml-4 hover:underline' onClick={() => setLogin(false)}>
						Sign up Now
					</button>
				</div>
			</form>
		</main>
	);
}

export default Login;
