import { fireEvent, render, screen } from '@testing-library/react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import App from 'App';
import rootReducer from 'data/reducers/main';
import middleware from 'data/middleware/main';
import { Login } from 'components/Login/Login';
import { DashboardNav } from 'components/DashboardNav/DashboardNav';

const store = createStore(rootReducer, middleware);

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}));

describe('Test snapshots', () => {
  it('Test App snapshot', () => {
    const view = render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(view).toMatchSnapshot();
  });
});

describe('Test Login screen', () => {
  it('Elements in login screen', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByPlaceholderText('Enter your login ID')).toBeTruthy();
    expect(screen.getByPlaceholderText('Enter your password')).toBeTruthy();
    expect(screen.getByText('Submit')).toBeTruthy();
  });

  it('Submit button is disabled by default if form is empty', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('Submit')).toHaveAttribute('disabled');
  });

  it('Alert is thrown when invalid credentials are entered', () => {
    render(
      <MemoryRouter>
        <Login users={{'test': {'password': 'test'}}} dispatch={null} />
      </MemoryRouter>
    );

    const id = screen.getByPlaceholderText('Enter your login ID');
    const password = screen.getByPlaceholderText('Enter your password');
    const submit = screen.getByText('Submit');

    fireEvent.change(id, { target: { value: 'Test' } });
    fireEvent.change(password, { target: { value: 'Test' } });

    expect(submit).not.toBeDisabled();

    fireEvent.click(submit);
    
    expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
  });

  it('Successfull login will not have prompt', () => {
    render(
      <MemoryRouter>
        <Login users={{'test': {'password': 'test'}}} dispatch={() => {}} />
      </MemoryRouter>
    );

    const id = screen.getByPlaceholderText('Enter your login ID');
    const password = screen.getByPlaceholderText('Enter your password');
    const submit = screen.getByText('Submit');

    fireEvent.change(id, { target: { value: 'test' } });
    fireEvent.change(password, { target: { value: 'test' } });

    expect(submit).not.toBeDisabled();

    fireEvent.click(submit);
    
    expect(screen.queryByText('Invalid credentials')).not.toBeInTheDocument();
  });
});

describe('Test nav component', () => {
  it('Nav will have three tabs and user name is displayed', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <DashboardNav username={'test'} dispatch={() => {}} />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Leaderboard')).toBeInTheDocument();
    expect(screen.getByText('New')).toBeInTheDocument();

    expect(screen.getByText('test')).toBeInTheDocument();
  });
});