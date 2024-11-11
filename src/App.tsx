import { HashRouter as Router, Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import { Theme } from "@radix-ui/themes";
import LoadingSpinner from "@/components/LoadingSpinner/index.tsx";
import "./App.css";

function dynamic(importer: () => any) {
  return loadable(importer, {
    fallback: (
      <div className="full-page">
        <LoadingSpinner isCenter />
      </div>
    ),
  });
}

const NotFound = () => {
  return <Home />;
};

const Home = dynamic(() => import("./pages/Home/index.tsx"));

function App() {
  return (
    <Theme>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Theme>
  );
}

export default App;
