import { usePromiseTracker } from "react-promise-tracker";
import { ThreeDots } from "react-loader-spinner";
import "./LoadingSpinner.css";

const LoadingSpinner = (props) => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <div className="loading-spinner">
        <ThreeDots color="#84734d" height="100" width="100" />
      </div>
    )
  );
};

export default LoadingSpinner;
