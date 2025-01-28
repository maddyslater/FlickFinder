import * as streamingAvailability from "streaming-availability";
// import axios from 'axios';
// const RAPID_API_KEY = "{8a3af3350bmsh5a05e972cfc469cp1d66fajsn1a8f6288dcaa}";

const fetchStreaming = async (movieID) => {
    const tmdbID = `movie/${movieID}`;
    const RAPID_API_KEY = "8a3af3350bmsh5a05e972cfc469cp1d66fajsn1a8f6288dcaa";
    const client = new streamingAvailability.Client(new streamingAvailability.Configuration({
        apiKey: RAPID_API_KEY
    }));

    try {
      const show = await client.showsApi.getShow(
        {id:tmdbID, output_language: 'en', country: "us"}
      );
      let { us } = show.streamingOptions;
      if (us && Object.keys(us).length > 0) {
        us.forEach((streamingOption) => {
            // console.log(streamingOption.link);
            console.log(streamingOption.service.imageSet.lightThemeImage);
        });
        return us;

    } else {
        const services = [];
        console.log("No streaming options available for this title");
        return services;

    }
    }
    catch (error) {
      console.log(`Streaming api error: ${error}`);
      throw error;
    }

};


export default fetchStreaming;

// console.log(show.title);
// console.log(show.overview);
// console.log(show.data.streamingOptions.us);

// const options = {
//     method: 'GET',
//     url: `https://streaming-availability.p.rapidapi.com/shows/movie/${movieID}`,
//     params: {
//       series_granularity: 'episode',
//       output_language: 'en',
//       country: 'us'
//     },
//     headers: {
//       'X-RapidAPI-Key': '8a3af3350bmsh5a05e972cfc469cp1d66fajsn1a8f6288dcaa',
//       'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
//     }
//   };
  
//   try {
//       const response = await axios.request(options)
//       console.log(response);
//       const services = response.data.streamingOptions.us
//       services.forEach((service) => {
//         console.log(`Type: ${service.type}, Name: ${service.service.name}`);
//       });
//       return services;
//   } catch (error) {
//       console.error(`APi ERROR ${error}`);
//   }