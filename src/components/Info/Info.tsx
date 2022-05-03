import './Info.scss'

export const Info = (): JSX.Element => (
	<div className='calc-info'>
		<h2>SMART CALC V.2</h2>
		<h3>Онлайн калькулятор</h3>
		<p>SPA на основе React, Redux и Typescript</p>
		<p>Репозиторий проекта:</p>
		<a
			target='_blank'
			rel='noopener noreferrer'
			href='https://github.com/Abubjazov/SmartCalc'
		>
			github.com/Abubjazov/SmartCalc
		</a>
		<p>Документация:</p>
		<a
			target='_blank'
			rel='noopener noreferrer'
			href='https://github.com/Abubjazov/SmartCalc/blob/main/README.md'
		>
			README.md
		</a>
		<p>Demo сервер:</p>
		<a
			target='_blank'
			rel='noopener noreferrer'
			href='https://abubjazov.github.io/SmartCalc/'
		>
			github.io/SmartCalc/
		</a>
		<p>Стэк технологий:</p>
		<h3>
			Typescript, React, ReactRouter, ReactHelmet, Redux, ReduxThunk, Axios,
			Nanoid, Bcryptjs, SASS
		</h3>
		<p className='calc-info-clarification'>
			Все права защищены! &copy; Abubjazov 2022 (
			<a
				target='_blank'
				rel='noopener noreferrer'
				href='https://github.com/Abubjazov'
			>
				https://github.com/Abubjazov
			</a>
			)
		</p>
	</div>
)
