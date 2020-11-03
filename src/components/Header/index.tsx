import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import React from 'react';
import './styles.css';

const Header: React.FC = () => (
    <div className="header">
        <AttachMoneyIcon style={{color: "white"}} />
        <span className="title">Registrar Funcionario - Tabelas e cálculos do IRRF</span>
    </div>
)

export default Header;
