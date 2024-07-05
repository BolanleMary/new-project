import image from "./assets/undraw_done_re_oak4 1.svg";
import logo from "./assets/logo.svg";
import topImage from "./assets/Dots-up.svg";
import buttomImage from "./assets/Dots-down.svg";

export default function App() {
  return (
    <section>
      <header className="flex justify-between">
        <img src={logo} className="logo p-14 sm:p-0" alt="Cogito logo" />
        <img src={topImage} className="design" alt="TopLayout" />
      </header>
      <div className=" flex flex-col items-center justify-center h-screen">
        <img src={image} className="image" alt="proceed image" />
        <br />
        <p className="text-xl font-base font-mono  text-center">
          Your 2-Factor Authentication has <br />
          been set up successfully
        </p>
        <br />
        <button className=" w-80 border-solid border-2 border-green bg-orange-500 w-100 p-3 rounded-lg text-white">
          Proceed
        </button>
      </div>
      <footer>
        <img src={buttomImage} className="design" alt="downLayout" />
      </footer>
    </section>
  );
}
