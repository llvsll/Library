import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import BookPage from "./pages/BookPage"
import Library from "./pages/Library"
import UserLibrary from "./pages/UserLibrary"
import { ADMIN_ROUTE, BOOK_ROUTE, LIBRARY_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, USER_LIBRARY_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: USER_LIBRARY_ROUTE,
        Component: UserLibrary
    }
]

export const publicRoutes = [
    {
        path: LIBRARY_ROUTE,
        Component: Library
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: BOOK_ROUTE + '/:id',
        Component: BookPage
    }
]