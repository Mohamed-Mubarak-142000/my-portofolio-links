import { links } from "./db";
import MyInfo from "./MyInfo";

function App() {
  return (
    <div className="app-container">
      <MyInfo />
      <div className="links-container">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <div className="link-info">
              <h2>{link.name}</h2>
              <p>{link.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
