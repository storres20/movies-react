import React from 'react';
import renderer from 'react-test-renderer';
import MoviesGrid from '../components/MoviesGrid';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MoviesGrid />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
