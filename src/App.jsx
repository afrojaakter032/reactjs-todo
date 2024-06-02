import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Tasklist from "./pages/Tasklist/Tasklist";
import Home from "./pages/Home/Home";


const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />,
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
