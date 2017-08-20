import agent from 'api';

export const create = ({ firstname, lastname, email, password, userid }) =>
  agent.post('/user')
    .set('Content-Type', 'application/json')
    .send({ firstname, lastname, email, password, userid });