import { Link } from "react-router-dom"
import plot2B from '../Images/plot2B.png'

const Plot2B = () => (
  <div className="h-full">
    {/* Main */}
    <div className="container mx-auto w-full items-center justify-center flex flex-wrap flex-col md:flex-row items-center">

      {/* Text box */}
      <div className="flex flex-col w-4/5 md:w-3/4 lg:items-start overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-left">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            It's time to stop.
          </span>
        </h1>

        <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="flex items-center justify-center pb-5">
            <img src={plot2B} className="object-cover h-60 rounded-lg" />
          </div>
          <div className="mb-4">
            <article className="prose text-indigo-100 lg:prose-xl xs:prose-sm max-w-none">
              <p>
                You dial the AIGO service center and after a long, boring, cumbersome process, you are finally able to cancel the service.
              </p>
              <p>
                “I'm free.” You think, at last.
              </p>
              <p>
                With the service canceled, you can now choose between all the possibilities, just like before. Right after the cancellation, you start to notice some inconveniences in daily life, but you have gone through them before. Being a true cyber Luddite makes you feel better about yourself. You feel like you have been through all those challenges, and there is nothing that can stop you from doing so.
              </p>
              <p>
                But soon you find yourself in new trouble. You start to receive more and more strange calls, and they seem to know everything about you. Some of the information they provide about you on the phone is outdated, but not by a lot. They either pretend to be government officials or just try to sell you something. You have been very cautious since then, but you still get frauded once in a while. Moreover, these frequent calls have been distracting you from normal life. You often hang up on calls that are actually useful, but it is hard for you to distinguish.
              </p>
              <p>
                One day, you are finally fed up with this inefficient lifestyle, and you know that AIGO has leaked your data to those scammers. You dial the service center again and ask if they have been doing so.
              </p>
              <p>
                “Sir, our service is perfectly legal and we assure you that your privacy, even after canceling your subscription, is protected at our highest priority on our most encrypted server.” The receptionist lady said in a well-trained calm voice, “but I would suggest you resubscribe to our AIGO service, since now our latest version can automatically filter out the malicious calls. It's just a little expensive since you have quitted before.”
              </p>
              <p>
                You are furious, but what is your choice?
              </p>
            </article>
          </div>

          <div className="flex items-center justify-center pr-20">
            <Link to="/ending1">
              <button onClick={() => { window.scrollTo(0, 0); }}
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                &larr; Resubscribe to AIGO, but at a higher price.
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-center mt-5 pl-20">
            <Link to="/ending2">
              <button onClick={() => { window.scrollTo(0, 0); }}
                className="bg-gradient-to-r from-green-500 to-purple-800 hover:from-green-500 hover:to-pink-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                Try to sue AIGO and the companies behind it.  &rarr;
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default Plot2B