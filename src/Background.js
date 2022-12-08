const Background = () => (
    <div className="h-full">
      {/* Main */}
      <div className="container mx-auto w-full items-center justify-center flex flex-wrap flex-col md:flex-row items-center">

        {/* Text box */}
        <div className="flex flex-col w-3/4 lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              Background
            </span>
          </h1>

          <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-blue-300 py-2 font-bold mb-2" for="emailaddress">
                TODO: Background text
              </label>
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
)

export default Background