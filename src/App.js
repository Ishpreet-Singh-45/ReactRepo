import React from 'react'
import TodoComponent from './TodoComponent'

function App()
{
	const list = 
	{
		heading: 'Your Tasks',
		description: 'My first React App Project',
		cards: [
			{
				id: 1,
				title: 'To-do task 1',
				description: 'To do task 1 description'
			},
			{
				id: 2,
				title: 'To-do task 2',
				description: 'To-do task 2 description'
			},
			{
				id: 3,
				title: 'To-do task 3',
				description: 'To-do task 3 description'
			}
		]
	}


	const cardTemplate = list.cards.map((item) =>
	{
		return (
			<TodoComponent key={item.id} title={item.title} description={item.description} />
		)
	})
	return (
		<div className="container">
			<div className="row">
				<h1 className="text-danger text-center" style={{fontSize: '3rem'}}><u> React App </u></h1>
			</div>
			<div className="row">
				<h4 className="text-muted text-center">
					{list.description}
				</h4>
			</div>

			{/* List contents */}
			<div className="row">
				<div className="" style={{fontSize: '2rem'}}>
					<h1> 
						{list.heading} 
						<span className="ms-3 btn btn-danger" style={{fontSize: '1.2rem'}}>
							<i className="me-1 bi bi-plus"></i>
							Add New
						</span>
					</h1>
					
					<ol type='1' style={{fontSize: '1.5rem'}} >
						{cardTemplate}
					</ol> 
				</div>
			</div>
			
		</div>
	)
}

export default App;
