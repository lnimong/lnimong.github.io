import React from 'react'

import { connect } from 'react-redux'

import { actionSelectUser } from '../actions'

import { When } from '../tools'

import Wait from './wait'

import User from './user'

const UsersListPage = ({ users, selectUser }) => (
	
	<div>
    
        {When (users !== null && users.length > 0) (() => 
            
            <div>
            {users.map (u => <User key={u.id} data={u} select={selectUser(u.id)} />)}
            </div> 
        )}

        {When (users === null || users.length === 0) (() => 

            <Wait />
        )}

	</div>
) 

export default connect(
	state => state.app, 
	dispatch =>({
        selectUser : (id) => () => dispatch(actionSelectUser(id))
    })) 
(UsersListPage)
