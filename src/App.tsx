import Layout from "./shared/layout/Layout"
import TodoApp from "./features/todo/ToDoApp.tsx";

function App() {

    return (
        <>
            <Layout>
                <TodoApp/>
            </Layout>
        </>
    )
}

export default App