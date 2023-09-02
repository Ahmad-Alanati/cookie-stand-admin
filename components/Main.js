import LoginForm from "./LoginForm"
import Form from "./Form"
import ReportTable from "@/components/ReportTable"

export default function Main(props) {
    return (
        <main className="flex flex-col items-center flex-grow py-4 space-y-8">
          {!props.user ? (
            <LoginForm loginformhundeler={props.loginformhundeler} />
          ) : (
            <>
              <Form handeler={props.handeler} />
              <ReportTable cookie={props.cookie}  deletData={props.deletData}/>
            </>
          )}
        </main>
    )
  }