import React from 'react';
import Results from '../components/results.js';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

it('should render data from an api Get request', async() => {
  const raw = await fetch ('https://swapi.dev/api/people/', {method:'GET'});
  let data = await raw.json();
  let entries = data.results;
  let results = Object.entries(entries);


  render(<Results src={results} />);

  screen.debug();

  console.log(results[0]);
  expect(results).toBeTruthy();
});
