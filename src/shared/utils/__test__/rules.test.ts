import { calcIRPF, verifyUserAdd, verifyUserEdit } from '../rules'
import { apiResponse } from '../../consts'

describe('Test rules functions', () => {
    it('Test verifyUserAdd', () => {
        var result1 = verifyUserAdd(apiResponse, {name: "teste", salary: 100, cpf: "111.111.111-11", discount: 12, dependents: 1});
        expect(result1).toStrictEqual({error: false});
        var result2 = verifyUserAdd(apiResponse, {name: "", salary: 100, cpf: "111.111.111-11", discount: 12, dependents: 1});
        expect(result2).toStrictEqual({error: true, message: "Preencha todos os campos"});
        var result3 = verifyUserAdd(apiResponse, {name: "teste", salary: 100, cpf: "936.938.039-60", discount: 12, dependents: 1});
        expect(result3).toStrictEqual({error: true, message: "Cpf já cadastrado"});
    });

    it('Test verifyUserEdit', () => {
      var result1 = verifyUserEdit({name: "teste", salary: 100, cpf: "936.938.039-60", discount: 12, dependents: 1});
      expect(result1).toStrictEqual({error: false});
      var result2 = verifyUserEdit({name: "", salary: 100, cpf: "111.111.111-11", discount: 12, dependents: 1});
      expect(result2).toStrictEqual({error: true, message: "Preencha todos os campos"});
    });

    it('Test calcIRPF', () => {
      var result = calcIRPF({
        "name": "Letícia Aurora Farias",
        "cpf": "936.938.039-60",
        "salary": 998,
        "discount": 74.85,
        "dependents": 2
      });
      expect(result).toEqual(0);
      var result1 = calcIRPF({
        "name": "Sandra Giovanna Drumond",
        "cpf": "715.890.756-25",
        "salary": 4522,
        "discount": 492.03,
        "dependents": 3
      });
      expect(result1).toEqual(175.64);
      var result2 = calcIRPF({
        "name": "Valentina Clara Nunes",
        "cpf": "101.151.404-41",
        "salary": 10000,
        "discount": 713.1,
        "dependents": 4
      });
      expect(result2).toEqual(1503.52);
      var result3 = calcIRPF({
        "name": "Valentina Clara Nunes",
        "cpf": "101.151.404-41",
        "salary": 4000,
        "discount": 713.1,
        "dependents": 4
      });
      expect(result3).toEqual(1828.69);
      var result4 = calcIRPF({
        "name": "Valentina Clara Nunes",
        "cpf": "101.151.404-41",
        "salary": 5000,
        "discount": 500.1,
        "dependents": 2
      });
      expect(result4).toEqual(302.3);
    });
  });