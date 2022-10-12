import { useState } from 'react';

const SearchIntermediate = ({ data }) => {
	return (
		<table>
			<tbody>
				<tr>
					<th className='head'>Name</th>
					<th className='head'>Surname</th>
					<th className='head'>Email</th>
					<th className='head'>Gender</th>
				</tr>
				{data.map((item) => (
					<tr key={item.id}>
						<td className='tbody'>{item.first_name}</td>
						<td className='tbody'>{item.last_name}</td>
						<td className='tbody'>{item.email}</td>
						<td className='tbody'>{item.gender}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default SearchIntermediate;
