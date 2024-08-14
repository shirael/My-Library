import { Navigate, createBrowserRouter } from "react-router-dom";
import { PATHS } from "./paths";
import HomePage from "../pages/HomePage";
import GuestGuard from "../sections/auth/GuestGuard";
import SignIn from "../pages/SignIn";
import CreateChapterForm from "../components/chapter/createChapterForm";
import SignUp from "../pages/SignUp";
import CreateBookForm from "../components/book/CreateBookForm";
import BooksList from "../components/book/bookList";
import BookDetails from "../components/book/bookDetails";
import ChaptersList from "../components/chapter/chapterList";
import CommentAddForm from "../components/comment/commentAddForm";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to={PATHS.home} />,
        index: true
    },
    {
        path: PATHS.home,
        element: <HomePage />,
        children: [

        ]
    },
    {
        path: PATHS.SignIn,
        element: <SignIn />,
    },
    {
        path: PATHS.SignUp,
        element: <SignUp />,
    },
    {
        path:PATHS.CreateBookForm,
        element:<CreateBookForm />
    },
    {
        path:PATHS.BookList,
        element:<BooksList />
    },
    {
        path:PATHS.BookDetails,
        element:<BookDetails />
    },
    {
        path:PATHS.CreateChapterForm,
        element: <CreateChapterForm />
    },
    {
        path:PATHS.ChaptersList,
        element: <ChaptersList />
    },
    {
        path:PATHS.CommentAddForm,
        element:<CommentAddForm />
    }
    // {
    //     path: PATHS.logout,
    //     element: <Logout />
    // },
]);
