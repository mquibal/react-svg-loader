import React from 'react'
import ReactDOM from 'react-dom'
import './shared/assets/dists/less/app.less'
import App from '../src/app/modules/App'
import Loader from '../src/app/modules/Loader'

ReactDOM.render(<Loader />, document.getElementById('app'))