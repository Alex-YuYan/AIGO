import { Link } from "react-router-dom"
const Intro = () => (
  <>
    <div className="container mx-auto w-full items-center justify-center flex flex-wrap flex-col md:flex-row items-center">

      {/* Text box */}
      <div className="flex flex-col w-4/5 md:w-3/4 lg:items-start overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-left">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            Introduction
          </span>
        </h1>

        <div className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <article className="prose text-indigo-100 lg:prose-xl xs:prose-sm max-w-none">
              <p>
              In the not-too-distant future, AI recommendation algorithms are taking over people's daily life. Tech giants, after realizing it is somewhat inefficient to gather user information separately, decided to form a cartel that collects your data through one API, a collective algorithm called AIGO. 
              </p>
              <p>
              At first, everything is working quite similarly as before, you still receive somewhat inaccurate information, and people are not quite reluctant to do this. After all, who cares about “Terms & Conditions” when there is no significant change to your service? But then as AIGO receives more training data, it evolves to be more potent and soon people start to enjoy a more accurate recommendation. Not just predicting what kind of video you may find laughable on TikTok, but rather the best choice of everything, physical or virtual. People are getting more and more reliant on the AIGO system.
              </p>
            </article>
          </div>

          <div className="flex items-center justify-center">
            <Link to='/prologue'>
              <button
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                Start Your Story
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Intro