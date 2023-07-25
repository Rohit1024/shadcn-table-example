import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import DemoPage from "./pages/Table";
import PageNotFound from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<DemoPage/>}/>
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
