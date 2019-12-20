import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

describe('test axios', () => {
  it('get users', async () => {
    mock.onGet('/users').reply(200, {
      users: [
        { id: 1, name: 'Maiver alejandro' },
      ],
    });

    const users = await axios.get('/users');
    expect(users.data).toMatchObject({
      users: [
        { id: 1, name: 'Maiver alejandro' },
      ],
    });
  });

  it('get users length', async () => {
    mock.onGet('/users').reply(200);
    await axios.get('/users');
    expect(mock.history.get.length).toBe(1);
    mock.resetHistory();
    expect(mock.history.get.length).toBe(0);
  });
});
