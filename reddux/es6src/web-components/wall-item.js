import React from 'react'

import { Panel, Divider, Button } from 'muicss/react';

const WallItem = ({content, select}) => (
	
	<div className ="c-wall-item">
		<Panel>
			<div className="c-theme">{content.theme}</div>
			<h4>{content.title}</h4>
			<div className="c-author">by {content.author}</div>
			<Divider />
			<div className="c-summary">by {content.summary}</div>
			<Divider />
			<div className="c-actions">
				<Button size="small" onClick={() => select(content)} variant="fab" color="danger">&gt;</Button>
			</div>
		</Panel>
	</div>
)

export default WallItem