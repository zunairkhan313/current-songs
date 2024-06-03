import RegisterForm from "../Components/RegisterForm";


export default async function Register() {


  return (
    <>
      <style>{`
                body {
                    background-color: white;
                }
            `}</style>
      <div className="bg-white">

        <RegisterForm />
      </div>
    </>
  )
}