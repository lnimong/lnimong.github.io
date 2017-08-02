import React from 'react'

import { connect } from 'react-redux'

import WallItem from './wall-item'

import Waiting from './waiting'

import { closePreview } from '../actions'

import { If } from '../tools'

import { Button } from 'muicss/react';

const Preview = ({ isOpen, publicationContent, waitForData, closePreview }) => (

    <div className="c-preview-root">

        <div className="c-preview-layer" onClick={closePreview} />

        <div className="c-preview">

            {If (waitForData) (() => (
                <Waiting />
            ))}

            {If (publicationContent !== null) (() => (
                <div>
                    <div className="c-theme">{publicationContent.head.theme}</div>
                    <h1>
                        {publicationContent.head.title}
                        <Button className="c-close" size="small" onClick={closePreview} variant="fab" color="danger">x</Button>
                    </h1>
                    <div className="c-author">{publicationContent.head.author}</div>

                    <div>
                        {publicationContent.content.map(({id,head,text}) => (
                            <div key={id}>
                                <h3>
                                    {head}
                                </h3>
                                <div className="c-content-text">{text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            
        </div>

    </div>
        
)

export default connect (
	(state) => state.preview,
	(dispatch) => ({
		closePreview : (pub) => dispatch(closePreview())
	})

) (Preview)
