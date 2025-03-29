/* eslint-disable @typescript-eslint/no-explicit-any */


// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table"
// import { getBusinessHub } from "../api"
// import { useEffect, useState } from "react"
import { DataTable } from "@/components/data-table"
import { GetBusinessHubResponse } from "../schema"
import { createColumnHelper } from "@tanstack/react-table"
import { BusinessHubTableActions } from "./business-hub-table-actions"


export function BusinessHubTable() {

    // const [businessHubs, setBusinessHubs] = useState([])
    const columnHelper = createColumnHelper<GetBusinessHubResponse>()

    const columns = [
        columnHelper.accessor('businessUnitId', {
            header: 'ID'
        }),
        columnHelper.accessor('businessUnitName', {
            header: 'Business Unit Name'
        }),
        columnHelper.accessor('region', {
            header: 'Region'
        }),
        columnHelper.accessor('state', {
            header: 'State'
        }),
        columnHelper.accessor('contactPerson', {
            header: 'Contact Person'
        }),
        columnHelper.display({
            id: 'actions',
            header: 'Action',
            cell: (props: any) => <BusinessHubTableActions businessHub={props.row.original} />
        })
    ]

    return (
        <>
            {/* <div>
                <p className="text-black" >Business Hub List</p>
                <Table>
                    <TableCaption>A list of business hub.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>S/N</TableHead>
                            <TableHead>Business Unit Name</TableHead>
                            <TableHead>Region</TableHead>
                            <TableHead>State</TableHead>
                            <TableHead>Contact</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {businessHubs && businessHubs.map((hub: any, index: number) => (    
                        <TableRow key={index}>
                            <TableCell className="font-medium text-black">{index + 1}</TableCell>
                            <TableCell className="text-black">{hub.businessUnitName}</TableCell>
                            <TableCell className="text-black">{hub.region}</TableCell>
                            <TableCell className="text-black">{hub.state}</TableCell>
                            <TableCell className="text-black">{hub.contactPerson}</TableCell>
                            <TableCell className="text-right text-black">View</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div> */}

            <DataTable
                url={`business-units`}
                columns={columns}
            />
        </>





    )
}