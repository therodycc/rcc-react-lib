import React from 'react'
import { RccLoadingPoints } from "../loading/loading-points"

export const LoadingTable = () => {
    return (
        <React.Fragment>
            <tr>
                <td colSpan={12}
                    className="position-relative"
                    style={{ height: '200px', }}
                >
                    <RccLoadingPoints />
                </td>
            </tr>
        </React.Fragment>
    )
}