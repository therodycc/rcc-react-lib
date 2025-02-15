import { FC } from 'react'

interface BadgePropsI {
    text: string
    bgClass?: "danger" | "success" | "warning" | "info" | "primary" | "secondary"

}
export const RccBadge: FC<BadgePropsI> = ({ text = "A simple danger alert with ", bgClass }) => {
    return (
        <div className={`alert alert-${bgClass} p-1 px-3 text-white`} role="alert">
            <span className="text-sm">{text}</span>
        </div>
    )
}