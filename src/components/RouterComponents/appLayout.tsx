import { Outlet } from "react-router"
import NavBar from "./NavBar"
import HomePage from "../homePage";
import { createContext, Dispatch, SetStateAction, useReducer, useState } from "react";
import { initialUser, User, userReducer } from "../User/user";
export const UserContext = createContext<{ user: User | null; userDispatch: Dispatch<any> }>({ user: null, userDispatch: () => { } })
export const IdContext = createContext<[Number, Dispatch<SetStateAction<Number>>]>([0, () => { }]);
const AppLayout = () => {
    const [id, setId] = useState<Number>(0)
    const [user, userDispatch] = useReducer(userReducer, initialUser)
    return (<>

        <UserContext value={{ user, userDispatch }}>
            <IdContext value={[id, setId]}>
                <HomePage />
                <NavBar />
                <Outlet />
            </IdContext>
        </UserContext>

    </>)
}
export default AppLayout