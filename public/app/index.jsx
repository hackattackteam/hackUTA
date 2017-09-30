// import JS libs
import React from 'react';
import Recipes from './recipes';
import {render} from 'react-dom';
// import style for this page
import './styles/index.scss';

class App extends React.Component {
  render () {
    return( 
    	<div className="app-index">
    		<Recipes />
    	</div>
    );
  }
}
k
render(<App/>, document.getElementById('app-mount-point'));