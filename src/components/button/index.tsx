import { ReactNode } from "react";

import "../../assets/css/global.css";

type bgClassType =
  | "danger"
  | "success"
  | "info"
  | "secondary"
  | "warning"
  | "primary"
  | "light";
type sizeType = "sm" | "lg";

type typeButtonType = "submit" | "button" | "reset";

export interface ButtonProps {
  children: ReactNode;
  action?: Function;
  bgClass: bgClassType;
  size?: sizeType;
  type?: typeButtonType;
  customClass?: string;
  loading?: boolean;
  fullWidth?: boolean;
}

export const RccButton = ({
  children,
  action,
  bgClass,
  size,
  type = "button",
  loading = false,
  customClass,
  fullWidth = false,
}: ButtonProps) => {
  return (
    <>
      <button
        onClick={() => action && action()}
        type={type}
        className={`btn btn-${bgClass} btn-${
          size && (size || "")
        } mx-1 ${customClass} ${fullWidth ? "full-width" : ""}`}
        disabled={loading}
      >
        {loading ? (
          <>
            <div className="d-flex align-items-center justify-content-center text-white">
              <span className="spinner-border spinner-border-sm mx-1"></span>
              <span className="">Please wait...</span>
            </div>
          </>
        ) : (
          children
        )}
      </button>
    </>
  );
};
