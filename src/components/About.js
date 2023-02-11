import React, { useState } from 'react';

export default function About() {
	const [ myStyle, setMyStyle ] = useState({
		backgroundColor: 'black',
		color: 'white'
	});
	const [ btnText, setBtnText ] = useState('Enable light Mode');
	let toggleStyle = () => {
		if (myStyle.color === 'white') {
			setMyStyle({
				backgroundColor: 'white',
				color: 'black'
			});
			setBtnText('Enable dark Mode');
		} else {
			setMyStyle({
				backgroundColor: 'black',
				color: 'white'
			});
			setBtnText('Enable light Mode');
		}
	};
	return (
		<div className="container mb-0" style={myStyle}>
			<h1 className="my-3" style={myStyle}>
				About us
			</h1>
			<div className="accordion pb-4" id="accordionExample" style={myStyle}>
				<div className="accordion-item" style={myStyle}>
					<h2 className="accordion-header" id="headingOne" style={myStyle}>
						<button
							className="accordion-button my-3"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							Read more About us....
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
						style={myStyle}
					>
						<div className="accordion-body" style={myStyle}>
							<strong>Welcome to our website!</strong> We are a team of dedicated individuals with a
							passion for creating powerful tools for writers. Our text editor is designed with simplicity
							and functionality in mind, making it the perfect tool for anyone looking to improve their
							writing. With a range of features and a user-friendly interface, our editor is the ideal
							solution for writers of all skill levels. Whether you're a seasoned professional or just
							starting out, we have the tools you need to succeed. Try our text editor today and
							experience the difference for yourself!
						</div>
					</div>
				</div>
			</div>
			<button
				onClick={toggleStyle}
				type="button"
				className="btn btn-primary mb-2"
				style={{
					color: 'white',
					backgroundColor: 'black',
					borderColor: 'white'
				}}
			>
				{btnText}
			</button>
		</div>
	);
}
