import "../styles/map.css";
import Image from "next/image";

export default function CampusMapPage() {
  return (
    <div className="map-container">
      <h1>Campus Map</h1>
      <p className="subtitle">Locate departments and key campus areas.</p>

      <div className="map-image">
        {/* <Image 
          src="/images/campus-map.jpg"
          alt="Campus Map"
          width={900}
          height={600}
        /> */}
      </div>

      {/* Embedded Google Map */}
      <div className="map-embed">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.820023893644!2d36.82720977411875!3d-1.2909111359548358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e3560a3591%3A0xcb545eecd7a2f429!2sSt.%20Paul&#39;s%20University!5e0!3m2!1sen!2ske!4v1706500000000"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="locations">
        <h2>Key Locations</h2>
        <ul>
          <li>🏫 Computer Science Block – Building A</li>
          <li>📚 Main Library – Building C</li>
          <li>🔬 Engineering Labs – Building H</li>
          <li>🏥 Health Center – Building E</li>
          <li>🏟 Sports Complex – Building K</li>
        </ul>
      </div>
    </div>
  );
}
//Campus Map Page displaying campus layout and key locations
//Features: server component, next/image optimization, embedded Google Map