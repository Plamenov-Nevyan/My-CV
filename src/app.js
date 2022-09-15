import {Home} from "./components/Home/Home"
import {Header} from "./components/Header/Header"
import {Route, Routes} from "react-router-dom"
import {CV} from "./components/CV/CV";
import {Contacts} from "./components/Contacts/Contacts";
import {Projects} from "./components/Portfolio/Projects";
import {AdminAuth} from "./components/AdminAuth/AdminAuth";
import {AdminActions} from "./components/AdminActions/AdminActions";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";
import {About} from "./components/About/About";
function App() {
  return (
<>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/cv" element={<CV />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/admin/auth" element={<AdminAuth />} />
        <Route path="/about" element={<About />} />
          <Route element={<PrivateRoute />} >
            <Route path="/admin/actions" element={<AdminActions />} />
          </Route>
      </Routes>
    </>
  );
}

export default App;
