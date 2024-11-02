import { ReactNode } from 'react';

type bgClassType =
    | "danger"
    | "success"
    | "info"
    | "secondary"
    | "warning"
    | "primary"
    | "light";
type sizeType = "sm" | "lg";

type typeButtonType = 'submit' | 'button' | 'reset'

export interface ButtonProps {
    children: ReactNode
    action?: Function
    bgClass: bgClassType
    size?:sizeType
    type:typeButtonType
    customClass?:string
    loading:boolean
}

export const RccButton = ({ children, action, bgClass, size, type, loading, customClass }: ButtonProps) => {
    return (
        <>
            <button
                onClick={() => action && action()}
                type={type}
                className={`btn btn-${bgClass} btn-${size && (size || '')} mx-1 ${customClass}`}
                disabled={loading}
            >
                {
                    loading ? <>
                        <div className='d-flex align-items-center justify-content-center text-white'>
                            <span className="spinner-border spinner-border-sm mx-1" ></span>
                            <span className="">Please wait...</span>
                        </div>
                    </>
                        : children

                }

            </button>
        </>
    )
}
