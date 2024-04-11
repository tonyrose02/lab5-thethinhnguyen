import {ToDoList} from '@/components/todos/ToDoList'
import {AddTask} from '@/components/dialogs/AddTask'
import {ToDoListItem} from '@/components/todos/ToDoListItem'

import {getToDoItems} from '@/lib/firebase/api'
import { toast } from 'sonner'

export default async function Home({children}) {
	const payload = await getToDoItems()
	const tasks = Object.entries(payload.todos)
	return (
		<>
			<header className="text-center pt-28">
				<h2 className="text-5xl text-slate-900">To do List Home Page</h2>
			</header>
			<main className=" max-w-md mx-auto  py-24">
				<ToDoList className=" space-y-4 p-4 h-[478px] max-h-[478px] overflow-y-scroll shadow-sm rounded-md border border-neutral-200">
					{tasks.map((task) => (
						<ToDoListItem key={task[0]} />
					))}
				</ToDoList>
				<AddTask />
			</main>
		</>
	)
}
