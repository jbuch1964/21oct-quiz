import { render, screen } from '@testing-library/react';
import App from './App';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
// import { useState } from 'react-something'

describe('This applies to App.js', () => {
  const server = setupServer(
    rest.get('http://localhost:3001/movies', (request, response, context) => {
      // response goes here
      return response(
        context.json(
          {
            "movieId": 1,
            "metascore": "67",
            "boxOffice": "$389,804,217",
            "director": "James Gunn",
            "title": "Guardians of the Galaxy Vol. 2",
            "actors": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
            "response": "True",
            "year": "2017",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg",
            "genre": "Action, Adventure, Comedy, Sci-Fi"
          }
        ))


    });
  )

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('should populate the movie entry on state after a successful API call', async () => {
  render(<App />)

  // test code goes here
  // const [movies, setMovies] = useState()
  expect(movies.length).toBe(1);
})



test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

})