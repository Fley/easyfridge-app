import superagent from 'superagent';
import superagentuse from 'superagent-use';
import prefix from 'superagent-prefix';
const baseUrl = process.env.REACT_APP_API_BASE_URL;

const agent = superagentuse(superagent);
agent.use(prefix(baseUrl));

export default agent;