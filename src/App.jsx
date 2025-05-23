import React from 'react';
import Chat from './Chat';
import KuralPage from './KuralPage';
import ScrollToTop from 'react-scroll-to-top';
import Navbar from './Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <div className="new"></div>
      <Chat />
      <KuralPage />
      <footer>
        <a
          href="#"
          style={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            margin: '10px 0',
          }}
        >
          
        </a>
        <a
          href="https://amanikandan1997.github.io/ReactJs_Portfolio/"
          style={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            margin: '10px 0',
          }}
        >
          Developed By Manikandan UKI @ 2025
        </a>
      </footer>
      {/* Scroll-to-Top button with creative design */}
      <ScrollToTop
        smooth
        component={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: "#90e0ef",
              color: '#fff',
              fontSize: '20px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              cursor: 'pointer',
            }}
          >
        <svg fill="#03045e" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330.002 330.002" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_7_"> <path id="XMLID_8_" d="M315.001,180.001h-300c-6.371,0-12.046,4.024-14.154,10.035c-2.109,6.011-0.19,12.699,4.784,16.678 l150.004,120c2.739,2.191,6.055,3.287,9.37,3.287c3.316,0,6.631-1.096,9.371-3.287l149.996-120 c4.974-3.98,6.893-10.667,4.784-16.678C327.047,184.024,321.371,180.001,315.001,180.001z M165.005,295.791L57.764,210.001H272.24 L165.005,295.791z"></path> <path id="XMLID_11_" d="M15.001,150.001h300c6.371,0,12.046-4.024,14.154-10.035c2.109-6.011,0.19-12.699-4.784-16.678 l-150.004-120c-5.479-4.382-13.262-4.382-18.741,0l-149.996,120c-4.974,3.979-6.893,10.667-4.784,16.678 C2.955,145.977,8.631,150.001,15.001,150.001z M164.997,34.21l107.241,85.79H57.762L164.997,34.21z"></path> </g> </g></svg>
          </div>
        }
      />
    </div>
  );
}

export default App;
