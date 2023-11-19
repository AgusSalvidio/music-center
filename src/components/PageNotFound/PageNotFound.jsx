import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="container py-5 text-center">
      <img src="https://static.thenounproject.com/png/331019-200.png"></img>
      <h4>Parece que esta página no existe</h4>
      <div className="pt-3">
        <Link to="/">
          <button className="btn btn-custom shadow-0 me-1 w-25">
            Ir a la página principal
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
