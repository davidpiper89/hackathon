import { Link } from "react-router-dom";
import ".//HomeStyling.css";

const Home = () => {
  return (
    <>
      <div className="homepage-header-container">
        <h1 className="homepage-header">FT-2 Phonics-tuition</h1>
      </div>
      <div className="homepage-content-container">
        <div className="linkContainer">
          <Link to={"/s"} className="links">
            Start
          </Link>
        </div>
        <div className="linkContainer">
          <Link to="/Help" className="links">
            Help
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
