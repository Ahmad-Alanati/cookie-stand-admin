import { hourly_sales } from "@/data"

export default function Output({ cookie, deletData }) {
  return (
    <div className="flex flex-col p-2 space-y-2 bg-green-100 text-center max-w-[200vh]">
      {cookie.length === 0 ? (
        <p className="mt-4 text-center text-gray-600">
          Report Table Coming Soon...
        </p>
      ) : (
        <>
          <table className='w-1/2 mx-auto my-8 text-xl center'>
            <thead>
              <tr key="">
                <th className='border border-black '>Location</th>
                <th className='border border-black ' >6am</th>
                <th className='border border-black ' >7am</th>
                <th className='border border-black ' >8am</th>
                <th className='border border-black ' >9am</th>
                <th className='border border-black ' >10am</th>
                <th className='border border-black ' >11am</th>
                <th className='border border-black ' >12pm</th>
                <th className='border border-black ' >1pm</th>
                <th className='border border-black ' >2pm</th>
                <th className='border border-black ' >3pm</th>
                <th className='border border-black ' >4pm</th>
                <th className='border border-black ' >5pm</th>
                <th className='border border-black ' >6pm</th>
                <th className='border border-black ' >7pm</th>
                <th className='border border-black ' >Total</th>
              </tr>
            </thead>
            {/* table body */}
            <tbody>
              {cookie.map((obj, index) => (
                <tr key={obj.id}>
                  <td className='border border-black '>
                    <span style={{ marginRight: '5px' }}>{obj.location}</span>
                    <svg onClick={() => deletData(obj.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                  </td>
                  {hourly_sales.map((sales, index) => (
                    <td key={index} className='border border-black '>{sales}</td>
                  ))}

                </tr>
              ))}
              <tr>
                <td className='border border-black '>{'Total'}</td>
                {hourly_sales.map((sales, index) => (
                  <td key={index} className='border border-black '>{sales * cookie.length}</td>
                ))}

              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  )
}
