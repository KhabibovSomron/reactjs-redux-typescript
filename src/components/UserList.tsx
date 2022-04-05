import React, {useEffect} from 'react';
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useAction";

const UserList: React.FC = () => {
    const {users, error, loading} = useTypeSelector(state => state.user)
    const {fetchUsers} = useActions()

    useEffect( () => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map((user, index) =>
                <div key={index}>{user.name}</div>
            )}
        </div>
    );
};

export default UserList;