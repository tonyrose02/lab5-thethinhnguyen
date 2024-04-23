import { ToDoList } from '@/components/todos/ToDoList';
import { AddTask } from '@/components/dialogs/AddTask';
import { ToDoListItem } from '@/components/todos/ToDoListItem';

import { getToDoItems } from '@/lib/firebase/api';

async function DemoPage({ children }) {
    const payload = await getToDoItems();
    const tasks = Object.entries(payload.todos);

    return (
        <>
            <header className="text-center pt-28">
                <h2 className="text-5xl text-slate-900">Demo Page Component</h2>
            </header>
            <main className="max-w-md mx-auto py-24">
                <AddTask />
            </main>
        </>
    );
}

export default DemoPage;
