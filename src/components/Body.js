import React from "react";


export default function Body() {
	return (
		<div className="body">
			<h3 className="title">About</h3>
			<div className="detail">Organized and dependable candidate successful at managing multiple priorities with a positive attitude. Willing to take on added responsibilities to meet team goals. Complex problem-solver with analytical and driven mindset. Dedicated to achieving demanding development objectives according to tight schedules while producing impeccable code.</div>
			<h3 className="title">Technical Skills</h3>
			<table className="table bcard-table">
				<tbody>
					<tr>
						<th>Languages</th>
						<td>C, C++, Objective-C, Java, Dart.</td>
					</tr>
					<tr>
						<th>Database</th>
						<td>MySQL, Firebase.</td>
					</tr>
					<tr>
						<th>Frameworks </th>
						<td>React, Backbone, NodeJS.</td>
					</tr>
					<tr>
						<th>Web Technologies</th>
						<td>HTML, HTML5, CSS, CSS3, Bootstrap, JavaScript, jQuery, AJAX, XML, REST APIs, JSON.</td>
					</tr>
					<tr>
						<th>IDEs/Tools </th>
						<td>Git, Docker, Eclipse, Atom, Visual studio code, Xcode, Android studio.</td>
					</tr>
				</tbody>
			</table>
		</div>
	)

}