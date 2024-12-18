```javascript
import { BrowserRouter, Routes, Route, useParams, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} >
          <Route path=':id' element={<ContactDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Contact() {
  const { id } = useParams();
  //Alternative solution:
  //const location = useLocation();
  //console.log(location.pathname);
  return (
    <div>
      <h1>Contact</h1>
      <p>Contact ID: {id}</p>
      {/* ... rest of the Contact component ... */}
    </div>
  );
}

function ContactDetails() {
  // ... ContactDetails component ...
}

function Home() { return <div>Home</div>}
function About() { return <div>About</div>}

export default App;
```