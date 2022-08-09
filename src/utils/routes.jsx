//Importing modules to expose then to routing
import Login from '../forms/Login';
import Register from '../forms/Register';
import Todos from '../pages/Todos';
import UpdateTask from '../pages/UpdateTask'

export const useRouter = () => [
    {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/",
        element: <Todos />,
      },
      {
        path: "/update/:taskId",
        element: <UpdateTask />,
      },
]