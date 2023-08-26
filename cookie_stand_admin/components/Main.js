import CreateForm from "@/components/Form"
import ReportTable from "@/components/ReportTable"

export default function Main(props) {
  return (
    <>
      <main className="flex flex-col items-center flex-grow min-h-screen py-4 space-y-8">
        <h2 className="text-2xl">Create Cookie Stand</h2>
        <CreateForm handler={props.handler} />
        <ReportTable cookie={props.cookie} />
      </main>
    </>
  )
}
