import Form from "./components/Form"

function App() {
  

  return (
    <>

      <header className=" bg-lime-400 py-3">
        <div className=" max-w-4xl mx-auto flex">
          <h1 className=" text-center font-bold text-xl text-white uppercase">contador de calorias</h1>
        </div>
      </header>
      <section className=" bg-lime-600 py-20 px-5">
        <div className=" max-w-4xl mx-auto">

          <Form />

        </div>
      </section>
    </>
  )
}

export default App