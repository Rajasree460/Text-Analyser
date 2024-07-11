import "./App.css";
//import Aboutus from "./components/Aboutus";
import Navbar from "./components/Navbar";
import TextF from "./components/TextF";
// import Aboutus from "./components/About";

function App() {
  return (
    <>
      {/* <Navbar title="Textutils" aboutText="About TextUtils" /> */}
      {/* <Navbar /> */}
      <Navbar title="Text Analyser" />
      <div className="container my-3">
        <TextF heading="Enter The Text To Analize Below" />
        {/* <Aboutus /> */}
      </div>
    </>
  );
}

export default App;
