import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import { logOut } from '../redux/auth/auth.slice';
import { PATHS } from '../routes/paths';


export default function Logout() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(logOut());
    }, [dispatch]);

    return <Navigate to={PATHS.home} />;
};

