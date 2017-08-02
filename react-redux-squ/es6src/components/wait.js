import React from 'react'

import { connect } from 'react-redux'

import CircularProgress from 'material-ui/CircularProgress';

const Wait = ({ text }) => {

	return   <div>
        <CircularProgress size={4}  />
        <div>{text}</div>
    </div>
}

export default Wait
