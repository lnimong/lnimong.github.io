import React from 'react'

import { connect } from 'react-redux'

import WallItem from './wall-item'

import { setUser } from '../actions'

import {Appbar, Container, Input} from 'muicss/react';

const SuperHeader = ({ user, logout }) => (
	<div className ="c-super-header">
		<Appbar>
			<Container>
				<table>
					<tbody>
						<tr>
							<td className="mui--appbar-height c-sg-logo">
								<img src="/public/pic/sg.png" />
							</td>
							<td className="mui--appbar-height c-search">
								<Input hint="Input 2" />
							</td>
							<td className="mui--appbar-height">
								<span className="c-friendly-name">hello {user}</span> 
								<span onClick={logout}>logout</span>
							</td>
						</tr>
					</tbody>
				</table>
			</Container>
		</Appbar>
	</div>
)

export default connect (
	(state) => state,
	(dispatch) => ({
		logout : () => dispatch(setUser(null))
	})
) (SuperHeader)
