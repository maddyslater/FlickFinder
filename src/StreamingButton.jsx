/* eslint-disable react/prop-types */
import { useState } from "react";
import fetchStreaming from "./services/streaming-api.jsx";
import StreamingList from "./StreamingList.jsx";

const StreamingButton = ({movieID}) => {
  const [streamingData, setStreamingData] = useState([]);
  const [dataVis, setDataVis] = useState(false);

  const handleStreaming = async (event) => {
    event.preventDefault();
    try {
      console.log(movieID);
      const services = await fetchStreaming(movieID);
      setStreamingData(services);
      setDataVis(true);
      console.log(services);

    }
    catch(error) {
      console.log(`Streaming button error: ${error}`)
    }
};

  return (
    <div>
      <button id="button-2" onClick={handleStreaming}>Where to Watch!</button>
      <StreamingList streamingData={streamingData} dataVis={dataVis}/>
    </div>
  );
};

export default StreamingButton;