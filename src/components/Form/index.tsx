import { Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { User } from '../../store/ducks/users/types';
import Currency from '../Fields/currency';
import Cpf from '../Fields/cpf';

const Form: React.FC<Props> = (props) => {
    const { editUser, handleSubmit } = props;
    const [user, setUser] = useState<User>({} as User);

    useEffect(() => {
        editUser && setUser(editUser)
    },[editUser])

    function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        handleSubmit(user)
    }

    function handleChangeInputValue(e: React.ChangeEvent<HTMLInputElement>) {
        setUser({...user, [e.target.name]: e.target.value})
    }

    function handleChangeCurrencyInputValue(value: number, name: string) {
        setUser({...user, [name]: value})
    }
    
    return (
        <form onSubmit={submitForm}>
            <div className="field">
                <label htmlFor="name">Nome</label>
                <input value={user.name || ''} type="text" name="name" onChange={handleChangeInputValue} />
            </div>
            <div className="field">
                <label htmlFor="name">CPF</label>
                <Cpf value={user.cpf || ''} onChange={handleChangeInputValue} disabled={!!editUser} name="cpf" />
            </div>
            <div className="field">
                <label htmlFor="salary">Salário</label>
                <Currency value={user.salary} name="salary" onChange={handleChangeCurrencyInputValue} />
            </div>
            <div className="field">
                <label htmlFor="name">Desconto</label>
                <Currency value={user.discount} name="discount" onChange={handleChangeCurrencyInputValue} />
            </div>
            <div className="field">
                <label htmlFor="name">Dependentes</label>
                <input value={user.dependents || ''} type="number" name="dependents" onChange={handleChangeInputValue}/>
            </div>
            <Button variant="contained" color="primary" type="submit">{!!editUser ? 'Editar' : 'Cadastrar'}</Button>
        </form>
    )
}

type Props = OwnProps

interface OwnProps {
    editUser?: User | null,
    handleSubmit(data: User): void 
}

export default Form;
