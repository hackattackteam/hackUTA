import './styles/index.scss';
import React from 'react';
import Recipes from './recipes';

import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return( 
    	<div className="app-index">
    		<Recipes />
    	</div>
    );
  }
}

render(<App/>, document.getElementById('app-mount-point'));