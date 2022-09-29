import React from 'react';
import { render } from '@testing-library/react-native';

import App from './App';

describe('App.tsx', () => {

  it('Should generate a snapshot', () => {
    const { toJSON } = render(<App />);
    expect(toJSON).toMatchSnapshot();
  });
  it('Should render correctly', () => {
    const { getByText } = render(<App />);
    expect(getByText('Cachupinapp')).toBeTruthy();
  });
});

