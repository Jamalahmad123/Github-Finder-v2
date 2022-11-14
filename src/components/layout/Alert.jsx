import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import { FaTimesCircle } from "react-icons/fa";

const Alert = () => {
  const { alert } = useContext(AlertContext);

  return (
    alert && (
      <div className="flex items-center mb-4 gap-2">
        {alert.type === "error" && (
          <span className="bg-white text-red-600 rounded-full">
            <FaTimesCircle />
          </span>
        )}

        <p className="flex-1 text-base font-semibold leadin-7 text-white">
          <strong>{alert.msg}</strong>
        </p>
      </div>
    )
  );
};

export default Alert;
