
import { Header } from "./components/nav/Header";

function App() {
  return (
    <div className="w-full h-full relative ">
      <Header />
      <img
        src="/assets/bunny.png"
        className=" absolute left-0 top-0 w-screen h-screen object-cover "
      >
      </img>
    </div>
  );
}

export default App;
