import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Container from "./components/Container/Container";
import Footer from "./components/Footer";

// name of the page to be displayed
function App() {
  const [pages] = useState([
    { name: "about me" },
    { name: "portfolio" },
    { name: "contact" },
    { name: "resume" },
  ]);

  const [currentContent, setCurrentPage] = useState(pages[0]);

  return (
    <div className='w-full h-auto bg-bodyColor text-lighText'>
            <div className='max-w-screen-2xl mx-auto px-16'>
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentContent={currentContent}
        ></Nav>
      </Header>
      <main>
        <Container currentContent={currentContent}></Container>
      </main>
      <Footer />
    </div>
    </div>
  );
}

export default App;

// import React, { Component } from 'react';
// // import './App.css';
// import Container from './components/Container/Container';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Container />
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
