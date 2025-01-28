/* eslint-disable react/prop-types */
const StreamingList = ({
    streamingData,
    dataVis
    }) => {

    const services = [];
    const seenServices = new Set();

    if (streamingData && streamingData.length > 0) {
      streamingData.forEach((service) => {
        if (!seenServices.has(service.service.name)) {
          seenServices.add(service.service.name);
          services.push(service);
        }
      });
    }
  
    return (
        <div>
            {services.length === 0 && dataVis && <p>This title is not currently available on any U.S. platforms</p>}
            {services.length > 0 && dataVis && (
              <div className="service-container">
                <p>Available on:</p>
                <ul className="icon-container">
                  {services.map((service, index) => (
                    <li key={index}>
                      <a href={service.link}>
                        <img id='service-icon' src={service.service.imageSet.lightThemeImage}  className="icon" style={{ width: '50px' }}/>
                        {/* <svg xmlns={service.service.imageSet.lightThemeImage} className="ionicon"width="20px"/> */}
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