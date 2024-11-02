

import { LoadingTable, RccTBody } from "..";
import { RccTHead } from "./t-head";

import NoDataTable from "./table-empty";
import { TablePropsI } from "./table.interface";

export const RccTable = ({ headItems, bodyItems }: TablePropsI) => {
    return (
        <>
            <table className="table align-items-center mb-0">
                <thead>
                    <RccTHead headItems={headItems} />
                </thead>
                <tbody>
                    <RccTBody headItems={headItems} bodyItems={bodyItems} />
                    {!bodyItems && <LoadingTable />}
                    {bodyItems?.length === 0 && (<NoDataTable />)}
                </tbody>
            </table>
        </>
    )
}

