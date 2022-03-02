import Navbar from "./components/Navbar";

import "./App.css";
import Catalog from "./pages/Catalog";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ maxWidth: 1440, margin: "0px auto" }}>
        <Catalog />
      </div>
    </>
  );
}

export default App;
