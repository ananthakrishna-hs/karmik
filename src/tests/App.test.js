import { render, screen } from '@testing-library/react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import App from 'App';
import rootReducer from 'data/reducers/main';
import middleware from 'data/middleware/main';

const store = createStore(rootReducer, middleware);

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
});