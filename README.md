#DANZ Coding Challenge

**Acceptance Criteria:**
- Must display a list of movies as default from moviedbapi
- Must call moviedbapi to search for movies
- Must display the movie detail page when a movie is clicked
- Must persist the search when navigating back from movie detail page

**Install:**
`npm install`

**Start Dev Environment:**
`npm start`

**Run tests:**
`npm test`

**Build Prod:**
`npm run build`


**With a bit more time I would've:**
- Separated api calls to other components so they could be tested independently
- Written more tests for those api calls
- Written integration tests
- Added more loaders for images and API calls
- Added better error handling (404 page, error messages, etc)
- Added more functionality to the search like filters and lazy loading results