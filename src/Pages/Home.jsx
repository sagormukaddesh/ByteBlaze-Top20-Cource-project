import Banner from "../Components/Banner";
import wave from '../assets/wave.svg'


const Home = () => {
    return (
        <div className="flex relative flex-col items-center justify-center min-h-[calc(100vh-288px)]">
            <Banner></Banner>
            <img className="absolute bottom-0 w-full" src={wave} alt="" />
        </div>
    );
};

export default Home;