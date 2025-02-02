import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface FloatMenuProps {
    options: Record<string, any>[]
}

const FloatMenu = ({ options }: FloatMenuProps) => {
    return (
        <>
            <ul
                className="dropdown-menu shadow-lg dropdown-menu-end p-3 mt-sm-n2 me-3 show"
                data-bs-popper="none"
                style={{ width: "300px", }}
            >
                {options.map((item, _index) => (
                    <Link
                        href={item?.href || ""}
                        key={_index}
                    >
                        <a
                            className="dropdown-item border-radius-md cursor-pointer"
                            onClick={() => item?.action?.()}
                        >
                            <div className="d-flex align-items-center py-1">
                                <FontAwesomeIcon
                                    className="bg-primary me-2 text-white p-3 rounded-circle shadow-lg"
                                    icon={item?.icon}
                                />
                                <div className="ms-2">
                                    <h6 className="text-sm font-weight-normal my-auto text-secondary">
                                        {item?.title}
                                    </h6>
                                </div>
                            </div>
                        </a>
                    </Link>
                ))}
            </ul>
        </>
    )
}

export default FloatMenu