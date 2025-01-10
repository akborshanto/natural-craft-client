import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error.statusText);
  return (
    <div style={{backgroundImage: "url(https://i.ibb.co/PDS4yRG/svg.png)"}} className="min-h-screen  bg-no-repeat bg-bottom md:bg-contain flex items-center justify-center">
      <div className="card md:flex-row flex-col items-center h-full card-side ">
        <figure>
          <img
            src="https://i.ibb.co/VQY2y76/image-processing20220929-6722-1jt3as5-removebg-preview.png"
            alt="Movie"
          />
        </figure>
        <div className=" space-y-3 md:text-center  md:w-1/3 m-auto w-full">
          <h2 className="text-5xl md:text-left text-center font-bold">404</h2>
          <p className="text-3xl text-center md:text-left font-bold">Page not found</p>
          <p className="text-1xl text-center md:text-left">Oops! Something went wrong. We couldn't find the page you're looking for. Don't worry, our team is working hard to fix it. In the meantime, you can go back to the homepage or try again later.</p>
          <div className="card-actions md:justify-start justify-center">
            <Link to='/' className="btn bg-[#f0a142]  text-black font-bold border-none">Go back to home page </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
