// import SearchOne from './SearchBeginner';
import './App.css';
import SearchIntermediate from './SearchIntermediate';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
	const [query, setQuery] = useState('');
	const [data, setData] = useState([]);
	

	useEffect(() => {
		const fetchUsers = async () => {
			const res = await axios.get(`http://localhost:3500?q=${query}`);
			setData(res.data);
		};
		fetchUsers();
	}, [query]);


	return (
		<div className='App'>
			<div className='container'>
				<div>
					<input
						type='text'
						placeholder='Search...'
						className='search'
						onChange={(event) => setQuery(event.target.value)}
					/>

					{<SearchIntermediate data={data} />}
				</div>
			</div>
		</div>
	);
}

export default App;
