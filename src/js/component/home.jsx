import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [newItem, setNewItem] = useState("");
	const [todo, setTodo] = useState([]);
	const [counter, setCounter] = useState(0);
	const addTodo = (e) => {
		if (newItem === "") {
			return;
		}
		if (e.key === "Enter") {
			const item = {
				id: Math.floor(Math.random() * 1000),
				value: newItem,
			};
			setTodo((list) => [...list, item]);
			setCounter((count) => count + 1);
			setNewItem("");
		}
	};

	const deleteItem = (id) => {
		const newArray = todo.filter((item) => item.id !== id);
		setTodo(newArray);
	};

	const decreaseItem = () => {
		setCounter((count) => count - 1);
	};
	return (
		<div className="main-container">
			<h1 className="text-center mt-5">TODOS</h1>
			<div className="card-of-list">
				<input
					type="text"
					className="add-todo"
					placeholder="Add a new todo"
					onChange={(e) => {
						setNewItem(e.target.value);
					}}
					value={newItem}
					onKeyPress={addTodo}
				/>
				<ul className="group-list">
					{todo.map((item) => {
						return (
							<li className="items" key={item.id}>
								{item.value}
								<button
									className="delete-item"
									onClick={() => {
										deleteItem(item.id);
										decreaseItem();
									}}>
									X
								</button>
							</li>
						);
					})}
				</ul>
				<h5>{`${counter} items left`}</h5>
			</div>
		</div>
	);
};

export default Home;
