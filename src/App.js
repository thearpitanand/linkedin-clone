import "./App.css";

// Components
import Feed from "./components/Feed/Feed";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div className="app">
      <Header />

      {/* App Body */}
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
};

export default App;
