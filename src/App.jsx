import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Redirect from "./pages/Redirect";

function App() {
  return (
    <>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <meta http-equiv="refresh" content={`0; url = ${url}`} />
      </Helmet> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:id" element={<Redirect />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
