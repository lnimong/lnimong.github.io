import React from 'react'

import { connect } from 'react-redux'

import { actionSelectUser } from '../actions'

import { When } from '../tools'

import Wait from './wait'

import User from './user'

const UserDetailsPage = ({ id, name }) => (
	
	<div>
    
        <h1>{name}</h1>

	</div>
) 

export default connect(
	state => state.app.selectedUser, 
	dispatch =>({})) 
(UserDetailsPage)
