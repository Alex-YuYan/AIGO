import { Link } from "react-router-dom"
import plot2A from '../Images/plot2A.png'

const Plot2A = () => (
  <div className="h-full">
    {/* Main */}
    <div className="container mx-auto w-full items-center justify-center flex flex-wrap flex-col md:flex-row items-center">

      {/* Text box */}
      <div className="flex flex-col w-4/5 md:w-3/4 lg:items-start overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-left">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            It's just too convenient!
          </span>
        </h1>

        <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="flex items-center justify-center pb-5">
            <img src={plot2A} className="object-cover h-60 rounded-lg" />
          </div>
          <div className="mb-4">
            <article className="prose text-indigo-100 lg:prose-xl xs:prose-sm max-w-none">
              <p>
                Days go by, and everything works just fine. Still, there are some moments that you feel you are somewhat scammed by AIGO in terms of financial decisions. But soon you no longer have such worries, because now the merchants and all the systems have updated their APIs. After a round of updates, you now find that you can no longer manually check the price of other products if you are using AIGO. The recommendation system now forms an information cocoon for everyone.
              </p>
              <p>
                It's becoming somewhat unacceptable for everyone, and there have been protests. You see people protesting down the streets, but your AIGO news feed does not provide you with any of the relevant information. You hear from your colleagues during a casual conversation that the government officials and the rich are using a different version of AIGO, but you have no way to verify it.
              </p>
              <p>
                But it is always the case that when you start to have doubts on AIGO, it starts to provide you with content that you find very enjoyable to watch or listen to. You always feel the convenience it brings about. Plus, even if the recommended items are becoming more and more expensive, their price tag always lies at the point where you can still afford them and are only slightly reluctant to pay.
              </p>
              <p>
                Today, you involuntarily come up with the idea of checking how your spending has varied over the years. And the bank statement relentlessly shows that your spending has increased more than 30% since you started using AIGO. Once again, you are overwhelmed with the fear that AIGO is implicitly taking over every aspect of your life. “What if I will no longer have access to the items that I actually want?” You start to question yourself.
              </p>
              <p>
                Indeed, you have been “told” what to do for the past years since you chose “yes” to the updated terms and conditions. Is AIGO somewhat shifting your personal preferences by not giving you enough choices? You have no way to know, but the idea of ending the service of AIGO has emerged again.
              </p>
              <p>
                You decide to...
              </p>
            </article>
          </div>

          <div className="flex items-center justify-center pr-20">
            <Link to="/ending1">
              <button onClick={() => { window.scrollTo(0, 0); }}
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                &larr; Do nothing and keep using AIGO, with the hope that it is not evil
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-center mt-5 pl-20">
            <Link to="/plot2B">
              <button onClick={() => { window.scrollTo(0, 0); }}
                className="bg-gradient-to-r from-green-500 to-purple-800 hover:from-green-500 hover:to-pink-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                End the AIGO service immediately, and turn to condemn it. &rarr;
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default Plot2A