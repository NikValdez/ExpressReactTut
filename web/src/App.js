import axios from "axios"
import React, { useState } from "react"
import "./App.css"

function App() {
	const [ name, setName ] = useState("")
	const [ home, setHome ] = useState("")

	useEffect(() => {
		axios.get("http://localhost:4000/home").then(function(response) {
			setHome(response.data)
		})
	}, [])

	async function postName(e) {
		e.preventDefault()
		try {
			await axios.post("http://localhost:4000/post_name", {
				name
			})
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className="App">
			<form onSubmit={postName}>
				<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
				<button type="submit">Send Name</button>
			</form>
			{home}
		</div>
	)
}

export default App
