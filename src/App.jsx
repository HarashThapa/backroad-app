import About from "./Component/About";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import Services from "./Component/Services";
import Test from "./Component/Test";
import Tours from "./Component/Tours";

const App = () => {
  // const user = {
  //   "fname": "Harash",
  //   "lname": "Thapa",
  //   age: 21,
  //   grade: "A+",
  // };
  return (
    <>
      {/* <Test {...user}/> */}
      <Navbar />
      <Header/>
      <About />
      <Services />
      <Tours />
      <Footer />
      <script src="./js/app.js"></script>

    </>
  )
};
export default App;