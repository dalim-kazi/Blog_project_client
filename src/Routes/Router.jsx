import { createBrowserRouter } from "react-router-dom";
import Main from "../Loyout/Main";
import Home from "../Pages/Homes/Home/Home";
import About from "../Pages/About/About";
import Projects from "../Pages/Projects/Projects";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element:<Home/>
            },
            {
                path: "/about",
                element:<About/>
            },
            {
                path: "/projects",
                element:<Projects/>
            }
        ]
    }
])