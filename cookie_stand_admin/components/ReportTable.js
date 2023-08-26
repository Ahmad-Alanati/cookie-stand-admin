import { hourly_sales } from "@/data"

export default function ReportTable(props) {
    return (
        <>
            {props.cookie.length === 0 ? (
                <h2 className="mt-4 text-center text-gray-600">No Cookie Stands Available</h2>
            ) : (
                <table className="p-8 bg-blue-200">
                    <tr>
                        <th>location</th>
                        <th>6am</th>
                        <th>7am</th>
                        <th>8am</th>
                        <th>9am</th>
                        <th>10am</th>
                        <th>11am</th>
                        <th>12am</th>
                        <th>1pm</th>
                        <th>2pm</th>
                        <th>3pm</th>
                        <th>4pm</th>
                        <th>5pm</th>
                        <th>6pm</th>
                        <th>7pm</th>
                        <th>totals</th>
                    </tr>
                    {props.cookie.map((obj) => (
                        <tr key={obj.id}>
                            <td className='border border-black '>{obj.location}</td>
                            {hourly_sales.map((sales, index) => (
                                <td key={index} className='border border-black '>{sales}</td>
                            ))}
                        </tr>
                    ))}
                    <tr>
                        <td className='border border-black '>{'Total'}</td>
                        {hourly_sales.map((sales, index) => (
                            <td key={index} className='border border-black '>{sales * props.cookie.length}</td>
                        ))}
                    </tr>
                </table>
            )}
        </>
    )
}
