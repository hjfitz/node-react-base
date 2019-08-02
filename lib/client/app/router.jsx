import 'core-js/stable'
import 'regenerator-runtime/runtime'

import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'

// Local Imports
import Layout from './layout'
import Home from './pages/Home'

const app = (
	<Router>
		<Layout>
			<Route path="/" component={Home} />
		</Layout>
	</Router>
)

// fetch entrypoint and render
const entry = document.getElementById('react-root')
render(app, entry)

// register a SW based on
