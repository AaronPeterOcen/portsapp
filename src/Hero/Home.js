import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>SUPPLY CHAIN DIVERSIFICATION AND ACCELERATION EXPERTS</h1>
      <p>unknown language</p>
      <button>
        <Link to="/about-us">About Us</Link>
      </button>
    </div>
  );
}

export default Home;
