import Form from "@/components/Form"

export default function Main(props) {
  return (
    <>
<main className="flex flex-col items-center flex-grow py-4 space-y-8">
          <h2 className="text-2xl">Create Cookie Stand</h2>
          <Form handler = {props.handler}/>
          {props.cookie.length === 0 ? (
            <p className="mt-4 text-center text-gray-600">
              Report Table Coming Soon...
            </p>
          ) : (
            <pre className="p-2 mt-4 bg-gray-200">
              {JSON.stringify(props.cookie, null, 2)}
            </pre>
          )}
        </main>
    </>
  )
}
