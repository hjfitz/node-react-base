import React from 'react'
import {withRouter} from 'react-router-dom'


const Layout = (props) => {
	props.history.listen(() => window.scrollTo(0, 0))
	return (
		<React.Fragment>
			<div className="container">
				{props.children}
			</div>
		</React.Fragment>
	)
}
export default withRouter(Layout)
