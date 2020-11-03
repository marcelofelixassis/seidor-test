import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { AppState } from '../../store';
import * as UserActions from '../../store/ducks/users/actions';
import { User } from '../../store/ducks/users/types';
import { History, LocationState } from 'history'
import Form from '../../components/Form';
import { verifyUserEdit } from '../../shared/utils/rules';

const EditUser: React.FC<Props> = (props) => {
  const { editUser, history, selectedUser } = props
  function handleSubmit(user: User) {
    const response = verifyUserEdit(user)
    if(response.error) {
      alert(response.message);
    } else {
      editUser(user);
      history.push("/");
    }
  }

  useEffect(() => {
    selectedUser === null && history.replace('/');
  },[selectedUser, history])
  
  return(
    <Form handleSubmit={handleSubmit} editUser={selectedUser} />
  ) 
}

interface StateProps {
  history: History<LocationState>,
  selectedUser: User | null,
}

interface DispatchProps {
  editUser(data: User): void,
}

type Props = StateProps & DispatchProps;

const mapStateToProps = (state: AppState) => ({
  selectedUser: state.users.userToEdit,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
