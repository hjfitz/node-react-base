import React, {useState} from 'react'

function Home() {
	const [time, setTime] = useState(new Date())
	setTimeout(() => setTime(new Date()), 980)
	return (
		<div>
			<h1>Home</h1>
			<p>The time is: {time.toLocaleString()}</p>
		</div>
	)
}

export default Home
