import { Link } from "react-router-dom";

const EmptyState = ({ massage, address, level }) => {
    return (
        <div className="min-h-[calc(100vh-288px)] flex flex-col gap-6 justify-center items-center pb-16">
            <p className="text-3xl font-bold text-red-600">{massage} </p>
            <Link
                to={address}
                className="relative inline-block px-4 py-2 font-medium group justify-center items-center">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-red-400 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2  border-rose-400  group-hover:bg-rose-500 "></span>
                <span className="relative text-black  group-hover:text-white">{level} </span>
            </Link>
        </div>
    );
};

export default EmptyState;