import {Outlet} from "react-router-dom";

import useOnMount from "./hooks/useOnMount";

import {useAppDispatch} from "./hooks/redux";
import {authUser} from "./store/user/user.action.creators";

import Layout from "./layout/Layout";
import ModalContainer from './components/ModalContainer/ModalContainer';

import './App.css'


function App() {

    const dispatch = useAppDispatch();

    useOnMount(() => {
        dispatch(authUser());
    });

    return (
        <Layout>
            <ModalContainer />
            <Outlet />
        </Layout>
    )
}

export default App
