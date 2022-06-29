function App() {

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-[80%] h-[80%] flex items-center">
        <div className="w-full flex flex-col items-center gap-8">
          <h1 className="text-white text-6xl font-bold">
            Learn to code by <br /> watching others
          </h1>
          <p className="text-white">
            See how experienced developers solve problems in real-time. <br /> Watching scripted tutorials is great, but understanding how <br /> developers think is invaluable.
          </p>
        </div>

        <div className="w-full flex justify-center flex-col gap-4">
          <div className="py-4 rounded bg-violet-600 w-[80%] flex justify-center">
            <span className="text-gray-300">
              <strong className="text-white font-bold">Try it free 7 days</strong> then $20/mo. thereafter
            </span>
          </div>
          <div className="bg-white p-8 rounded w-[80%] drop-shadow-[0px_10px_4px_gray]">
            <form action="" className="flex flex-col gap-6">
              <input type="text" placeholder="First Name" className="px-5 h-14 border rounded border-gray-300 placeholder-gray-600"/>
              <input type="text" placeholder="Last Name" className="px-5 h-14 border rounded border-gray-300 placeholder-gray-600"/>
              <input type="Email" placeholder="Email Address" className="px-5 h-14 border rounded border-gray-300 placeholder-gray-600"/>
              <input type="text" placeholder="Password" className="px-5 h-14 border rounded border-gray-300 placeholder-gray-600"/>   
              <button 
                type="submit"
                className="bg-green-500 rounded py-4 text-white cursor-pointer"
              >
                CLAIM YOUR FREE TRIAL
              </button>
              <p className="text-sm flex justify-center">
                By clicking the button, you are agreeing to our Terms and Service
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
