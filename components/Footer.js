
export default function Footer({cookieStands}) {
    return (
      <footer className="p-4 text-center text-white bg-green-500">
  <div className="flex items-center justify-between p-4 text-white bg-green-500">
    <p>&copy; Wayne Enterprises 2023</p>
    <h2>{cookieStands.length} Location World Wide</h2>
  </div>
  
  
      </footer>
    )
  }
  