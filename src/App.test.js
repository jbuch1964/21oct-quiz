import { render, screen } from '@testing-library/react';
import App from './App';
import { rest } from 'msw'
import { setupServer } from 'msw/node'

describe('This applies to App.js', () => {
  const server = setupServer(
    rest.get('http://localhost:3001/movies/', (request, response, context) => {
      // response goes here
      return response(
        context.json(

          [{
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
          },
          {
            "movieId": 2,
            "metascore": "90",
            "boxOffice": "N/A",
            "rated": "PG",
            "director": "George Lucas",
            "title": "Star Wars: Episode IV - A New Hope",
            "actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
            "response": "True",
            "year": "1977",
            "poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
            "genre": "Action, Adventure, Fantasy, Sci-Fi"
          }

          ]
        ))


    })
  )

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('should populate the movie entry on state after a successful API call', async () => {
    render(<App />)

    // test code goes here
    let item = await screen.findByText(/Guardians of the Galaxy Vol. 2/i);
    expect(screen.getByText(/Guardians of the Galaxy Vol. 2/i)).toBeInTheDocument();

  })

  test('renders movie poster image', async () => {
    render(<App />);
    const imgElement = await (screen.findByRole('img'));
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

})

// describe('This applies to MovieList.js', () => {
//   it('should populate the movie entry on state after a successful API call', async () => {
//     render(<App />)

//     // test code goes here
//     let item = await screen.findByText(/Guardians of the Galaxy Vol. 2/i);
//     expect(screen.getByText(/Guardians of the Galaxy Vol. 2/i)).toBeInTheDocument();

//   })
// })