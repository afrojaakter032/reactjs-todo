import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";

import TaskCreate from "./pages/Tasks/TaskCreate";
import TaskList from "./pages/Tasks/TaskList";



const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />,
  },

  {
      path: "/tasks/create",
      element: <TaskCreate />,
  },

  {
    path: "/tasks/list",
    element: <TaskList />,
},

]);

function App() {

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
