import Layout from "./shared/layout/Layout"
import TodoApp from "./features/todo/TodoApp.tsx";

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