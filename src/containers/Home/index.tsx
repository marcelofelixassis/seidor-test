import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { AppState } from '../../store';
import * as UserActions from '../../store/ducks/users/actions';
import { User } from '../../store/ducks/users/types';
import './styles.css';
import { History, LocationState } from 'history'
import UserList from '../../components/UserList';

const Home: React.FC<Props> = (props) => {
    const { users, history, removeUser, setUserToEdit } = props;

    const handleRemoveUser = (data: string) => {
        removeUser(data)
    }

    const handleEditUser = (data: User) => {
        setUserToEdit(data);
        history.push('/edit');
    }

    useEffect(() => {
        setUserToEdit(null)
    },[setUserToEdit])

    return(
        <div className="home-container">
            <span className="home-title">Tabela e cálculos do IRRF</span>
            <div className="description">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            <span className="home-title">Seus Funcionários</span>
            <div className="btn-add-container">
                <Button variant="contained" color="primary" onClick={() => history.push('/add')}>
                    Novo funcionário
                </Button>
            </div>
            <UserList users={users} handleRemoveUser={handleRemoveUser} goToEditUser={handleEditUser} />
        </div>
    )
}

interface StateProps {
    users: User[],
    history: History<LocationState>
}

interface DispatchProps {
    removeUser(data: string): void,
    setUserToEdit(data: User | null): void
}

type Props = StateProps & DispatchProps;

const mapStateToProps = (state: AppState) => ({
    users: state.users.data
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);