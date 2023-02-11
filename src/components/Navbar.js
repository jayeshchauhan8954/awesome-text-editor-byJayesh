import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
	const [ myStyle, setMyStyle ] = useState({
		backgroundColor: 'black',
		color: 'white'
	});
	const [ btnText, setBtnText ] = useState('Make Navbar light');
	let toggleStyle = () => {
		if (myStyle.color === 'white') {
			setMyStyle({
				backgroundColor: 'white',
				color: 'black'
			});
			setBtnText('Make Navbar dark');
		} else {
			setMyStyle({
				backgroundColor: 'black',
				color: 'white'
			});
			setBtnText('Make Navbar light');
		}
	};
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary" style={myStyle}>
			<div className="container-fluid" style={myStyle}>
				<a className="navbar-brand" href="/" style={myStyle}>
					{props.title}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
					style={myStyle}
				>
					<span className="navbar-toggler-icon" style={myStyle} />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent" style={myStyle}>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/" style={myStyle}>
								{props.home}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/" style={myStyle}>
								{props.about}
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="/"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
								style={myStyle}
							>
								{props.dropdown}
							</a>
							<ul className="dropdown-menu" style={myStyle}>
								<li>
									<a className="dropdown-item" href="/" style={myStyle}>
										{props.action}
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="/" style={myStyle}>
										{props.another_action}
									</a>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<a className="dropdown-item" href="/" style={myStyle}>
										{props.something_else}
									</a>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" style={myStyle}>
								{props.disable}
							</a>
						</li>
					</ul>
					<form className="d-flex" role="search" style={myStyle}>
						<div className="container" style={myStyle}>
							<button
								onClick={toggleStyle}
								type="button"
								className="btn btn-primary"
								style={{
									color: 'white',
									backgroundColor: 'black',
									borderColor: 'white'
								}}
							>
								{btnText}
							</button>
						</div>
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-light" type="submit" style={myStyle}>
							{props.search}
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	home: PropTypes.string,
	about: PropTypes.string,
	dropdown: PropTypes.string,
	action: PropTypes.string,
	another_action: PropTypes.string,
	something_else: PropTypes.string,
	disable: PropTypes.string,
	search: PropTypes.string
};

Navbar.defaultProps = {
	title: 'Set title here',
	home: 'Set home here',
	about: 'Set about here',
	dropdown: 'Set dropdown here',
	action: 'Set action here',
	another_action: 'Set another_action here',
	something_else: 'Set something_else here',
	disable: 'Set disable here',
	search: 'Set search here'
};
