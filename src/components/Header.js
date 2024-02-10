import React from "react";
import profilepic from '../images/profile-pic.jpeg';

export default function Header() {
	return (
		<div className="">
			<div className="header">
				<div className="profile-pic-box">
					<img src={profilepic} className="profile-pic" alt="self-logo" />
				</div>
				<h2 className="profile-name">Sneha Parkar</h2>
				<h4 className="role">Chief Software Architect</h4>
				<a className="link" href="https://snehaparkar.in">snehaparkar.in</a>
			</div>

			<div className="d-flex  justify-content-center bcard-buttons">
				<button className="btn btn-light"><a href="mailto://snehaparkar007@gmail.com" target="_blank" rel="noreferrer"><span>Email</span></a></button>
				<button className="btn  btn-light"><a href="https://github.com/snehaparkar" target="_blank" rel="noreferrer"><span>Github</span></a></button>
			</div>
		</div>
	)
}