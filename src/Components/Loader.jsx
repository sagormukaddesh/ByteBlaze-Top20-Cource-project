import { PropagateLoader } from "react-spinners";
const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-288px)]">
            <PropagateLoader size={30} color='#F92FD3'></PropagateLoader>
        </div>
    );
};

export default Loader;