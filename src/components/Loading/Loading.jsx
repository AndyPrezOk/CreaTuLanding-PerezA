import { FadeLoader } from "react-spinners";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <FadeLoader />
    </div>
  );
};

export default Loading;
