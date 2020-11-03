import { Table, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';
import React from 'react';
import { User } from '../../store/ducks/users/types';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import './styles.css';
import { calcIRPF } from '../../shared/utils/rules';
import NumberFormat from 'react-number-format';

const UserList: React.FC<Props> = (props) => {
    const { users, handleRemoveUser, goToEditUser } = props;
    
    return(
        <Table>
            <TableHead className="table-head">
                <TableRow>
                    <TableCell className="head-cell">Nome</TableCell>
                    <TableCell className="head-cell">Cpf</TableCell>
                    <TableCell className="head-cell">Salário Bruto</TableCell>
                    <TableCell className="head-cell">Desconto da Previdência</TableCell>
                    <TableCell className="head-cell">Número de Dependentes</TableCell>
                    <TableCell className="head-cell">Desconto IRPF</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((row, key) => (
                    <TableRow key={key}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.cpf}</TableCell>
                        <TableCell>
                            <NumberFormat 
                                value={row.salary} 
                                decimalScale={2}
                                decimalSeparator=","
                                fixedDecimalScale
                                placeholder="R$ 0,00"
                                prefix="R$ "
                                thousandSeparator="."
                                displayType={'text'}
                            />
                        </TableCell>
                        <TableCell>
                            <NumberFormat 
                                value={row.discount} 
                                decimalScale={2}
                                decimalSeparator=","
                                fixedDecimalScale
                                placeholder="R$ 0,00"
                                prefix="R$ "
                                thousandSeparator="."
                                displayType={'text'}
                            />
                        </TableCell>
                        <TableCell>{row.dependents}</TableCell>
                        <TableCell>
                            <NumberFormat 
                                value={calcIRPF(row)} 
                                decimalScale={2}
                                decimalSeparator=","
                                fixedDecimalScale
                                placeholder="R$ 0,00"
                                prefix="R$ "
                                thousandSeparator="."
                                displayType={'text'}
                            />
                        </TableCell>
                        <TableCell><DeleteForeverIcon onClick={() => handleRemoveUser(row.cpf)}/></TableCell>
                        <TableCell><EditIcon onClick={() => goToEditUser(row)}/></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
    
type Props = OwnProps

interface OwnProps {
    users: User[],
    handleRemoveUser(data: string): void,
    goToEditUser(data: User): void,
}

export default UserList;