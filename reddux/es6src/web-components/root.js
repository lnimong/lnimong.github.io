import React from 'react'

import { connect } from 'react-redux'

import Wall from './wall'

import SuperHeader from './super-header'

import Preview from './preview'

const className = (prev) => prev === null || prev.isOpen == false ? 'c-root' : 'c-root with-preview' 

const Root = (preview) => (
	<div className={className(preview)}>
		<SuperHeader />
		<Wall />
		<Preview />
	</div>
) 

export default connect (
		(state) => state.preview
) (Root)
