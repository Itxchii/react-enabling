import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
