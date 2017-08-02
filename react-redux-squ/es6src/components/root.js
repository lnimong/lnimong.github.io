import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import styles from './style/styles.less';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const Root = ({children}) => (

	<MuiThemeProvider>	
		<div className="c-root"> 
            {children}
		</div>
	</MuiThemeProvider>
) 

export default Root