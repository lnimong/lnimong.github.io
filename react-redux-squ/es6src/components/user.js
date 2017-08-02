import React from 'react'

import { connect } from 'react-redux'

import { actionSelectUser } from '../actions'

import Paper from 'material-ui/Paper';

const User = ({ data, select }) => {

    let {name, picurl, id, details} = data

	return <Paper onClick={select}>
        <img src={picurl} />
        <div>{name}</div>
        <div>{details}</div>
	</Paper>
}

export default User
