import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { AppState } from '../../store';
import * as UserActions from '../../store/ducks/users/actions';
import { User } from '../../store/ducks/users/types';
import { History, LocationState } from 'history'
import Form from '../../components/Form';
import { verifyUserAdd } from '../../shared/utils/rules';

const AddUser: React.FC<Props> = (props) => {
    const { users, addUser, history } = props
    function handleSubmit(user: User) {
        const response = verifyUserAdd(users, user)
        if(response.error) {
            alert(response.message);
        } else {
            addUser(user);
            history.push("/");
        }
    }
   
    return(
       <Form handleSubmit={handleSubmit} />
    )
    
}

interface StateProps {
    users: User[],
    history: History<LocationState>
}

interface DispatchProps {
    addUser(data: User): void,
}

type Props = StateProps & DispatchProps;

const mapStateToProps = (state: AppState) => ({
    users: state.users.data
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
