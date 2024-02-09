import { createBrowserRouter } from "react-router-dom";
import Main from "../Loyout/Main";
import Home from "../Pages/Homes/Home/Home";
import About from "../Pages/About/About";
import Projects from "../Pages/Projects/Projects";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";

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
            },
            {
                path: "/signUp",
                element:<SignUp/>
            },
            {
                path: "/signIn",
                element:<SignIn/>
            }
        ]
    }
])