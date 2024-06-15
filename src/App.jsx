import "./App.css";
import { Bars3Icon } from "@heroicons/react/24/outline";

function App() {
  return (
    <div className="w-screen h-screen bg-dune bg-cover bg-center overflow-x-hidden">
      <div className="fixed top-0 w-full">
        <div className="flex items-center px-8 h-20 w-full md:h-12 md:px-4 bg-lightDark">
          <Bars3Icon className="w-12 h-12 md:w-8 md:h-8 stroke-white"/>
        </div>
        <div className="min-h-0.5 w-full bg-orange-400 animate-pulse">
      </div>
      </div>


      <div className="flex justify-center items-center min-h-screen bg-dune bg-cover bg-center bg-fixed" />

      <div className="flex flex-col justify-center items-center h-fit text-7xl md:text-8xl text-white font-Dune">
        DUNE 
        <span className="text-lg">Part 2</span>
      </div> 

      <div className="flex justify-center items-center min-h-screen bg-dune bg-cover bg-center bg-fixed" />

      <div className="flex flex-col justify-center items-center h-fit text-2xl text-white font-Dune">
      This Summer
      <span className="text-sm">February 28, 2024</span>
      </div> 
      <div className="flex justify-center items-center min-h-screen bg-dune bg-cover bg-center bg-fixed" />

      <div className="flex justify-center items-center min-h-screen bg-dune2 bg-cover bg-center bg-fixed" />

      <div className="flex justify-center items-center min-h-screen bg-dune2 bg-cover bg-center bg-fixed" >
        <div className="flex flex-col md:flex-row mb-auto pt-32 sm:pl-40 sm:pr-40 md:pl-40 md:pr-72 md:pb-72 justify-between items-center h-full w-full md:text-2xl text-white font-Dune">
          <span className="flex flex-col items-center pb-5">
            <span>Timothee Chalamet</span>
            <span className="text-sm">Paul Atreides</span>
          </span>
          <span className="flex flex-col items-center">
            <span>Zendaya</span>
            <span className="text-sm">Chani</span>
          </span>
        </div>
        
      </div>
    </div>
  )
}

export default App;

