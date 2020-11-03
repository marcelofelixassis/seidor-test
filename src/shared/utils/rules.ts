import { User } from "../../store/ducks/users/types";

export interface Response {
    error: boolean,
    message?: string,
}

export function verifyUserAdd(users: User[], userAdd: User): Response {
    if(userAdd.name === "" || userAdd.cpf === "" || userAdd.dependents < 0 || userAdd.discount < 0 || userAdd.salary < 0) {
        return {error: true, message: "Preencha todos os campos"};
    } else {
        const result = users.filter(item => item.cpf === userAdd.cpf)
        if(result.length > 0) {
            return {error: true, message: "Cpf já cadastrado"};
        }
    }
    return {error: false};
}

export function verifyUserEdit(userEdit: User): Response {
    if(userEdit.name === "" || userEdit.cpf === "" || userEdit.dependents < 0 || userEdit.discount < 0 || userEdit.salary < 0) {
        return {error: true, message: "Preencha todos os campos"};
    }
    return {error: false};
}

export function calcIRPF(user: User): number {
    var dpd = 164.56
    var dpdmulti = user.dependents * dpd
    var sbir = user.salary - user.discount - dpdmulti
    var result = 0
    switch(true) {
        case (sbir <= 1903.98):
            result = 0
            break;
        case (sbir >= 1903.99 && sbir < 2826.65):
            result = (sbir * 0.75) - 142.80
            break;
        case (sbir >= 2826.66 && sbir < 3751.05):
            result = (sbir * 0.15) - 354.80
            break;
        case (sbir >= 3751.06 && sbir < 4664.68):
            result = (sbir * 0.225) - 636.13
            break;
        case (sbir >= 4664.69):
            result = (sbir * 0.275) - 869.36
            break;
    }
    return parseFloat(result.toFixed(2))
}