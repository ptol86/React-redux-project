import React from "react";

const TableHead = () => {
    return (
        <thead className="information-container_head">
            <tr className="information-container_tr">
                <th className="information-container terminal">Terminal</th>
                <th className="information-container local-time-th">
                <span className="local-time">

                Local time
                </span>
                </th>
                <th className="information-container destination">Destination</th>
                <th className="information-container status">Status</th>
                <th className="information-container airline">Airline</th>
                <th className="information-container flight">Flight</th>
            </tr>
        </thead>
    )
}

export default TableHead;