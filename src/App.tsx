import Navbar from "./components/Navbar";

import "./App.css";
import Catalog from "./pages/Catalog";

function App() {
  return (
    <>
      <Navbar />
      <div
        style={{
          maxWidth: 1440,
          margin: "0px auto",
          height: "calc(100% - 100px)",
        }}
      >
        <Catalog />
      </div>
    </>
  );
}

export default App;
