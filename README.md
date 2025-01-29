# Flick Finder

## Author: Maddy Slater

### Last edited: 01-28-24

### A little about the project:

This project is a movie recommendation website that utilizes API querys to provide users with a list of movie recommendations based on a combination of movie genre and keywords. The first page takes a users' genre and keyword input and allows them to search for movies. The second page displays the movie posters and titles of each recommended movie. Users can click on the movie titles to see an overview of the movie and also find out where to watch. If it is available for streaming in the U.S., the card will display the icons of available streaming services. Users can then click on the icons and they will be taken directly to a deep link where they can watch the film through the given service.

## Main Features
-  Fetching movies: Uses the TMDB API's discover method to find movies that match keyword and genre filters. Results are ordered by popularity.
-  Fetching streaming services: Uses the Streaming Availability API to fetch all the streaming services offering the film as well as deep links to site where users can watch.

## Details:
Languages & Tools: Javascript, React

## Instructions :
### View the deployed website [here](https://flickfinder-fcqj.onrender.com)

Running this project locally requires NodeJS and yarn/npm. To install the required packages, run the following command
`npm install`

To run, download the repository locally and run the following commands
`npm run build`
`npm run preview`