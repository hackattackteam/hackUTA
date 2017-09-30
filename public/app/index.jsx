// import JS libs
import React from 'react';
import {render} from 'react-dom';
import Recipes from './recipes.jsx';
import HeaderBar from './header_bar.jsx';
// import style for this page
import './styles/index.scss';

class App extends React.Component {
  render () {
    return( 
    	<div className="app-index">
    		<HeaderBar />
    		
    	</div>
    );
  }
}

render(<App/>, document.getElementById('app-mount-point'));