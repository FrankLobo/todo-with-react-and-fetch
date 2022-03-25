import React, { useState, useEffect } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [newItem, setNewItem] = useState("");
	const [todo, setTodo] = useState([]);
	const [counter, setCounter] = useState(0);
	// useEffect(() => {
	// 	sendTodos();
	// 	// , getTodos(), updateTodos(), deleteTodos()
	// }, [todo]);

	const deleteItem = (id) => {
		const newArray = todo.filter((item) => item.id !== id);
		setTodo(newArray);
	};

	const decreaseItem = () => {
		setCounter((count) => count - 1);
	};

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

	// const sendTodos = () => {
	// 	fetch("https://assets.breatheco.de/apis/fake/todos/user/franklobo", {
	// 		method: "POST",
	// 		body: [],
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 	})
	// 		.then((response) => {
	// 			if (!response.ok) throw new Error();
	// 			return response.json();
	// 		})
	// 		.then((todo) => {
	// 			setTodo(todo);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// };
	// const getTodos = () => {
	// 	fetch("https://assets.breatheco.de/apis/fake/todos/user/franklobo", {
	// 		method: "GET",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 	})
	// 		.then((response) => {
	// 			if (!response.ok) throw new Error();
	// 			return response.json();
	// 		})
	// 		.then((data) => {
	// 			setTodo(data);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// };
	// const updateTodos = () => {
	// 	fetch("https://assets.breatheco.de/apis/fake/todos/user/franklobo", {
	// 		method: "PUT",
	// 		body: JSON.stringify(data),
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 	})
	// 		.then((response) => {
	// 			if (!response.ok) throw new Error();
	// 			return response.json();
	// 		})
	// 		.then((data) => {
	// 			setTodo(data);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// };
	// const deleteTodos = () => {
	// 	fetch("https://assets.breatheco.de/apis/fake/todos/user/franklobo", {
	// 		method: "DELETE",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 	})
	// 		.then((response) => {
	// 			if (!response.ok) throw new Error();
	// 			return response.json();
	// 		})
	// 		.then((data) => {
	// 			setTodo(data);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// };

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
