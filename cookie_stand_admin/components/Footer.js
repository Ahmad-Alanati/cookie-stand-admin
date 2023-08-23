export default function Footer(props) {
  return (
    <>
      <footer className="bg-green-500 ipy-6">
        <p>{props.cookie.length} Location World Wide</p>
        <p>&copy; Wayne Enterprises 2023</p>
      </footer>
    </>
  )
}
