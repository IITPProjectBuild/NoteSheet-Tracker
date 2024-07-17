import {Sidebar} from "../Component/Sidebar";
import Navbar from "../Component/Navbar";
import { Templategrid } from "../Component/Templategrid";
export default function Home() {
  return (  <>
    <Navbar />
    <div className="flex">
      <Sidebar />
      <Templategrid />
    </div>
  </>
   
  );
}
