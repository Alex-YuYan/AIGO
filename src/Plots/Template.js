import { Link } from "react-router-dom"

const __Template__ = () => (
  <div className="h-full">
    {/* Main */}
    <div className="container mx-auto w-full items-center justify-center flex flex-wrap flex-col md:flex-row items-center">

      {/* Text box */}
      <div className="flex flex-col w-4/5 md:w-3/4 lg:items-start overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-left">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            __title__
          </span>
        </h1>

        <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <article className="prose text-indigo-100 lg:prose-xl xs:prose-sm max-w-none">
              __article__
            </article>
          </div>

          <div className="flex items-center justify-center pr-20">
            <Link to="__Plot__">
              <button onClick={() => {window.scrollTo(0, 0);}}
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                &larr; __choice1__
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-center mt-5 pl-20">
            <Link to="__Plot__">
              <button onClick={() => {window.scrollTo(0, 0);}}
                className="bg-gradient-to-r from-green-500 to-purple-800 hover:from-green-500 hover:to-pink-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                __choice2__ &rarr;
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default __Template__