import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      gap: "15px",
      alignItems: "center",
      padding: "10px",

      borderBottom: "2px solid #ddd"
    }}>
      {/* Logo */}
 

      {/* Title */}
      {/* <h3 style={{ margin: "0", fontSize: "24px", color: "#480ca8" }}>
        Valluvar AI
      </h3> */}
<div style={{padding:"8px"}}>
<button className="btn">
  <div className="wrapper">
  <h3 className="text"style={{ margin: "0", fontSize: "15px", color: "#480ca8", display:"flex",justifyContent:"center",alignItems:"center"}}>
  <img 
        src="https://img.freepik.com/premium-vector/tamil-poet-thiruvalluvar-writing-thirukkural_1108340-154.jpg" 
        alt="Logo" 
        style={{ height: "40px",  }} 
      />      Valluvar AI
      </h3>
    <div className="flower flower1">
      <div className="petal one"></div>
      <div className="petal two"></div>
      <div className="petal three"></div>
      <div className="petal four"></div>
    </div>
    <div className="flower flower2">
      <div className="petal one"></div>
      <div className="petal two"></div>
      <div className="petal three"></div>
      <div className="petal four"></div>
    </div>
    <div className="flower flower3">
      <div className="petal one"></div>
      <div className="petal two"></div>
      <div className="petal three"></div>
      <div className="petal four"></div>
    </div>
    <div className="flower flower4">
      <div className="petal one"></div>
      <div className="petal two"></div>
      <div className="petal three"></div>
      <div className="petal four"></div>
    </div>
    <div className="flower flower5">
      <div className="petal one"></div>
      <div className="petal two"></div>
      <div className="petal three"></div>
      <div className="petal four"></div>
    </div>
    <div className="flower flower6">
      <div className="petal one"></div>
      <div className="petal two"></div>
      <div className="petal three"></div>
      <div className="petal four"></div>
    </div>
 
  </div>
 
</button>

</div>
 
      {/* Spacer */}
      <div style={{ flex: "1" }}></div>

<button className="btn">
  <div className="wrapper">
    <p className="text"><a href='https://www.linkedin.com/in/manikandan-arunachalam-2b0803262/' target='blank'><svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Linkedin</title>
    <g id="Icon/Social/linkedin-color" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z" id="Shape" fill="#007BB5"></path>
    </g>
</svg> </a></p>

    <div className="flower flower1">
      <div className="petal one"></div>
      <div className="petal two"></div>
      <div className="petal three"></div>
      <div className="petal four"></div>
    </div>
    <div className="flower flower2">
      <div className="petal one"></div>
      <div className="petal two"></div>
      <div className="petal three"></div>
      <div className="petal four"></div>
    </div>
    <div className="flower flower3">
      <div className="petal one"></div>
      <div className="petal two"></div>
      <div className="petal three"></div>
      <div className="petal four"></div>
    </div>
    <div className="flower flower4">
      <div className="petal one"></div>
      <div className="petal two"></div>
      <div className="petal three"></div>
      <div className="petal four"></div>
    </div>
    <div className="flower flower5">
      <div className="petal one"></div>
      <div className="petal two"></div>
      <div className="petal three"></div>
      <div className="petal four"></div>
    </div>
    <div className="flower flower6">
      <div className="petal one"></div>
      <div className="petal two"></div>
      <div className="petal three"></div>
      <div className="petal four"></div>
    </div>
  </div>
</button>

      {/* Donate Button */}
      {/* <button classNameName='button'
       
        onClick={() => window.open('https://www.yourdonationlink.com', '_blank')}
      >
        Donate
      </button> */}
    </div>
  );
}

export default Navbar;
