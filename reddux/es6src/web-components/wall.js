import React from 'react'

import { connect } from 'react-redux'

import WallItem from './wall-item'

import Waiting from './waiting'

import { openPub } from '../actions'

import { If } from '../tools'

import { Container } from 'muicss/react';

const Wall = ({ filteredPublications, selectPub, waitForData }) => (

	<div className={waitForData ? "c-publications-container c-waiting" : "c-publications-container"}>
	
		<Container>
		
			{If (waitForData) (() => (
				<Waiting />
			))}
		
			{If (waitForData == false) (() => (
				<div className ="c-publications c-data">
					{filteredPublications.map((i) => (
						<WallItem key={i.id} content={i} select={selectPub} />
					))}
				</div>
			))}

		</Container>
	</div>
)

export default connect (
	(state) => state.wall,
	(dispatch) => ({
		selectPub : (pub) => dispatch(openPub(pub))
	})
) (Wall)
