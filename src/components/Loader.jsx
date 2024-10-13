import { Html } from "@react-three/drei";
import { RotateLoader } from "react-spinners";

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[10vw] h-[10vw] rounded-full">
          <RotateLoader color="#767168" />
        </div>
      </div>
    </Html>
  );
};

export default Loader;
