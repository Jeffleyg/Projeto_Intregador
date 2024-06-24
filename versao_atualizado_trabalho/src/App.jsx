import Home from "./routes/Home";
import Login from "./routes/Login";
import Perfil from "./routes/Perfil";

export default function App() {

  return (
    <div className= "App">
      <BrowserRouter>
        <NavigateBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

