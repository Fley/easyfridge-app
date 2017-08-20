import agent from 'api';
import mocker from 'superagent-mocker';
const mockedAgent = mocker(agent);

mockedAgent.timeout = 10000;

mockedAgent.post('/user', function (req) {
  const { firstname, lastname, email, password, userid } = req.body;
  return {
    id: req.params.id,
    body: { firstname, lastname, email, password, userid }
  };
});