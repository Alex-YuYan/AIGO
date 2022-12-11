import { Link } from "react-router-dom"
import ending1 from '../Images/ending1.png'

const Ending1 = () => (
  <div className="h-full">
    {/* Main */}
    <div className="container mx-auto w-full items-center justify-center flex flex-wrap flex-col md:flex-row items-center">

      {/* Text box */}
      <div className="flex flex-col w-4/5 md:w-3/4 lg:items-start overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-left">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            Ending 1: Becoming AIGO
          </span>
        </h1>

        <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="flex items-center justify-center pb-5">
            <img src={ending1} className="object-cover h-60 rounded-lg" />
          </div>
          <div className="mb-4">
            <article className="prose text-indigo-100 lg:prose-xl xs:prose-sm max-w-none">
              <p>Years have passed and you have been living on AIGO every day. You enjoy the convenience it brings to your life, and it acts more like your savior in many cases. The dependency grows fast. Now you have formed a habit of asking AIGO&rsquo;s advice in advance to make any decisions, and after hearing the analysis performed by AIGO, you always go with AIGO&rsquo;s choice. &ldquo;It&rsquo;s not because I&rsquo;m controlled by AIGO,&rdquo; you reassure yourself every time, &ldquo;it&rsquo;s that AIGO&rsquo;s decision is really based and reasonable.&rdquo;</p>
              <p>But you still retain that tiny bit of doubt in your mind. Although you can&apos;t quite put your finger on it, you start to be aware that something is not right. You have been choosing the decisions AIGO made for you all the time, and you feel like you have become a physical representation of the idea of AIGO.&nbsp;</p>
              <p>Like the choices you made before, you continue to remain silent. You have had the chance to challenge the system, but for this or that reason you either came back to this track of co-existing with AIGO. At the same time, people are becoming lazier and lazier through the years. Why bother thinking on our own if AI can do it for us?</p>
              <p>One day, you are facing an important choice that could completely change the rest of your life. Out of habit, you asked AIGO for advice. Its answer is somewhat weird to you, but you cannot really tell how it is wrong. It just &ldquo;feels&rdquo; weird. It&rsquo;s not a surprise, since you haven&rsquo;t been exercising your logical thinking ability for a long time. You choose to still trust AIGO&rsquo;s choice.&nbsp;</p>
              <p>But, at the moment you make that decision, are you actually yourself? Or are you just a physical representation of AIGO?</p>
            </article>
          </div>

          <div className="flex items-center justify-center mb-5">
            <Link to="/summary">
              <button onClick={() => { window.scrollTo(0, 0); }}
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                Summary
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Link to="/">
              <button onClick={() => { window.scrollTo(0, 0); }}
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                Feel like finding another ending?<br></br>START OVER
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default Ending1