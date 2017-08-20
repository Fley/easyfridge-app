import agent from 'api';

export const authenticate = ({ email, password }) =>
  agent.post('/authentication')
    .set('Content-Type', 'application/json')
    .send({ email, password });

export const extractPayload = token => JSON.parse(atob(token));
export const isTokenValid = payload => false;