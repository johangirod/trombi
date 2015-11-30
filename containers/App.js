import React, { Image } from 'react'
import * as squads from '../constants/squads'
const Evaneosian = ({photoUrl, name, nicknames, jobTitle, squad}) =>
	<li>
		<img src={photoUrl}/>
		<h3>{name} <small> aka {nicknames.join(' / ')} </small></h3>
		<p>{jobTitle}</p>
		<Squad squad={squad}/>
	</li>

const squadToString = (squad) => squad.replace('_', ' ').toLowerCase()
const Squad = ({squad}) =>
	<p> {squadToString(squad)} </p>


const data = [{
	photoUrl: 'https://lh6.googleusercontent.com/-FldIBMNKFt0/Tnmn2PLkR0I/AAAAAAAAAiM/pg0D9O8aFuU/w448-h445-no/Arthur.jpg',
	name: 'Arthur Boulanger',
	nicknames: ['Baker'],
	jobTitle: 'Design Manager',
	squad: squads.TIPI,
}, {
	photoUrl: 'http://content.screencast.com/users/caro.evaneos/folders/Jing/media/7b2a8b09-aad1-4aad-b63e-a28721c75612/2015-01-27_1417.png',
	name: 'Caroline Troost',
	nicknames: ['Caro', 'Troosty'],
	jobTitle: 'Area Manager',
	squad: squads.ESPACE_PERSO,
}]

const App = () =>
	<div>
		<h1> Evaneos Trombinoscope </h1>
		<ul>
			{data.map((evaneosian, index) => {
				return <Evaneosian key={index} {...evaneosian}/>
			})}
		</ul>
	</div>

export default App
