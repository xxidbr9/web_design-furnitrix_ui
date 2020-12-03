import Home from "./pages/Home";
import Loading from "utils/contexts/Loading";
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'


function App() {
    gsap.registerPlugin(ScrollTrigger);
    return (
        <Loading>
            <Home />
        </Loading>
    );
}

export default App;
