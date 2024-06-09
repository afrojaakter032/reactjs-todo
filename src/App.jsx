import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Addtask from "./pages/Addtask/Addtask";
import Tasklist from "./pages/Tasklist/Tasklist";



const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />,
  },

  {
      path: "/addtask",
      element: <Addtask />,
  },

  {
    path: "/tasklist",
    element: <Tasklist />,
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
