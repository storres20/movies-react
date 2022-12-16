import React from 'react';
import renderer from 'react-test-renderer';
import AboutPage from '../components/AboutPage';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <AboutPage />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
