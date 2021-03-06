import React from  'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

// Uses boostrap components to build a header bar...
class HeaderBar extends React.Component {
	render () {
		return (
			<Navbar inverse>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">FoodBunk</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem eventkey={1} href="#">Donate</NavItem>
						<NavItem eventkey={2} href="#">Search</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

module.exports = HeaderBar;