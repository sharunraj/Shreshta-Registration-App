import Home from './assets/home';
import About from './assets/about';
import Contact from './assets/contact';
import Admin from './assets/admin';
import Register from './assets/register';
import User from './assets/user';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
import Footer from './components/Footer';
import {ThemeProvider} from "styled-components";
import './App.css'
import { GlobalStyle } from './GlobalStyle';
import Events from './assets/Events';
import Errorp from "./assets/Errorp";
import GoToTop from './components/GoToTop';
import UTransaction from './assets/UTransaction';
import ATransaction from './assets/ATransaction';
import Addtoken from './assets/addtoken';
import Eventreg from './assets/Eventreg';
import Table from './assets/Tables';
import EventDetails from './assets/EventDetails';
import ProtectedRoute from './utils/ProvateRoute';
import AdminRoute from './utils/AdminRoute';
import Book from './assets/Book';
import BookedEvents from './assets/BookedEvents';
const App = () => {
  const theme ={
    colors:{
      heading: "#ffff",
      text: "#ffff",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
    };

  return (
  <ThemeProvider theme={theme}>
  <GlobalStyle />
  <GoToTop/>
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path='/login' element={<User />} />
    <Route path='/' element={<ProtectedRoute> <Home /> </ProtectedRoute>}/>
    <Route path='/about' element={<ProtectedRoute> <About /> </ProtectedRoute>} />
    <Route path='/register' element={<ProtectedRoute> <Register /> </ProtectedRoute>} />
    <Route path='/contact' element={<ProtectedRoute> <Contact /> </ProtectedRoute>} />
    <Route path='/admin' element={<ProtectedRoute> <AdminRoute> <Admin /> </AdminRoute> </ProtectedRoute>} />
    <Route path='/Events' element={<ProtectedRoute> <Events/> </ProtectedRoute>}/>
    <Route path='/Errorp' element={<ProtectedRoute> <Errorp /> </ProtectedRoute>} />
    <Route path='/UTransaction' element={<ProtectedRoute> <UTransaction/> </ProtectedRoute>}/>
    <Route path='/ATransaction' element={<ProtectedRoute> <ATransaction/> </ProtectedRoute>}/>
    <Route path='/addtoken' element={<ProtectedRoute><Addtoken/></ProtectedRoute>}/>
    <Route path='/Tables' element={<ProtectedRoute> <Table /></ProtectedRoute>} />
    <Route path='/Eventreg' element={<ProtectedRoute> <Eventreg /> </ProtectedRoute>} />
    <Route path='/EventDetails' element={<ProtectedRoute> <EventDetails /> </ProtectedRoute>} />
    <Route path='/book' element={<ProtectedRoute> <Book /> </ProtectedRoute>} />
    <Route path='/booked_events' element={<ProtectedRoute> <BookedEvents /> </ProtectedRoute>} />
  </Routes>
  <Footer />
  </BrowserRouter>
  </ThemeProvider>
  );
};
export default App;
