import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");

	const validateInput = (event) => {
		if (inputValue === "") {
			alert("The input cannot be empty");
		}
		if (event.key === "ENTER") {
			return;
		}
	};
	return (
		<div className="main-container">
			<h1 className="text-center mt-5">TODOS</h1>
			<div className="card-of-list">
				<input
					type="text"
					className="add-todo"
					placeholder="add a new to do"
					onChange={(e) => {
						setInputValue(e.target.value);
					}}
					value={inputValue}
					onKeyPress={inputValue}
				/>
				<ul className="group-list">
					{inputValue !== "" ? (
						<li className="items">
							{setInputValue(e.target.value)}
							<button className="delete-item">X</button>
						</li>
					) : (
						alert("The input cannot be empty")
					)}
				</ul>
			</div>
		</div>
	);
};

export default Home;
