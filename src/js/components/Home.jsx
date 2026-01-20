import React, { useState } from "react";

const Home = () => {
	// inputValue: aquí guardamos lo que estoy escribiendo ahora mismo antes de enviarlo a la lista 
	// setInputValue: es el "botón" para cambiar inputValue
	const [inputValue, setInputValue] = useState("");

	// todos: aquí guardamos todas las tareas que previamente pre escribí
	// setTodos: es el "botón" para cambiar la lista de tareas de estado
	const [todos, setTodos] = useState([]);

	
	// onChange es algo que se activa cada vez que escribimos o borramos algo en el input, es decir cuando cambia el texto del input o hay un cambio
	// event.target.value = lo que está escrito en el input en este momento
	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	// onKeyDown se activa cada vez que presionamos una tecla (una letra, Enter, Backspace, etc)
	// event.key dice qué tecla presionaste
	// luego verifico que no esté vacio en el ===
	//luego agrego la  tarea en setTodos, copio las de todo, añado el texto que puse
	//lo seIntumpt lo dejo otra vez blanquito para una nueva 
	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			const text = inputValue.trim();
			if (text === "") return;
			setTodos([...todos, text]);
			setInputValue("");
		}
	};

	// Esta función borra una tarea, indexToDelete es el número de la tarea que quiero eliminar
	//y luego el filter crea la lista sin la que ya borré 
// guardo de nuevo  la lista nueva sin esa tarea
	const deleteTodo = (indexToDelete) => {
		const newTodos = todos.filter((task, index) => index !== indexToDelete);
		setTodos(newTodos);
	};

	return (
		<div className="page">
			<div className="card">
				<h1 className="title">todos</h1>
				<input
					className="todo-input"
					type="text"
					placeholder="que quieres hacer?"
					value={inputValue}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
				/>

				
				<ul className="todo-list">
					{todos.length === 0 ? (
						<li className="todo-item empty">No hay tareas, añadir tareas</li>
					) : (todos.map((task, index) => (
							<li className="todo-item" key={index}>
														<span>{task}</span>

						
								<button
									className="delete-btn"
									onClick={() => deleteTodo(index)}
								>
									🗑️
								</button>
							</li>
						))
					)}
				</ul>
			</div>
		</div>
	);
};

export default Home;