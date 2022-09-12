import {Home} from "./components/Home/Home"
import {Header} from "./components/Header/Header"
import {Route, Routes} from "react-router-dom"
import {CV} from "./components/CV/CV";
import {Contacts} from "./components/Contacts/Contacts";
function App() {
  return (
<>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path ="/cv" element={<CV />} />
      <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
