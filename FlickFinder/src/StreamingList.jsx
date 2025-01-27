/* eslint-disable react/prop-types */
const StreamingList = ({
    streamingData,
    dataVis
    }) => {

    return (
        <div>
            {streamingData.length === 0 && dataVis === true && <p>Not today</p>}
            {streamingData && (
        <div>
          <h3>Streaming Services:</h3>
          <ul>
            {streamingData.map((service, index) => (
              <li key={index}>
                <a href={service.link}>
                  <img src={service.service.imageSet.lightThemeImage}/>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
        </div>
    );
};

export default StreamingList;