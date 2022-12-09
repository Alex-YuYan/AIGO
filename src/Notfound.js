import { Link } from "react-router-dom"

const Notfound = () => (
    <div className="h-full">
      {/* Main */}
      <div className="container mx-auto w-full items-center justify-center flex flex-wrap flex-col md:flex-row items-center">

        {/* Text box */}
        <div className="flex flex-col w-4/5 md:w-3/4 lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-left">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              404, hit the logo to go back ^_^
            </span>
          </h1>
        </div>

      </div>
    </div>
)

export default Notfound