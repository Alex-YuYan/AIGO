import { Link } from "react-router-dom"
import plot2C from '../Images/plot2C.png'

const Plot2C = () => (
  <div className="h-full">
    {/* Main */}
    <div className="container mx-auto w-full items-center justify-center flex flex-wrap flex-col md:flex-row items-center">

      {/* Text box */}
      <div className="flex flex-col w-4/5 md:w-3/4 lg:items-start overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-left">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            The worst is yet to come...
          </span>
        </h1>

        <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="flex items-center justify-center pb-5">
            <img src={plot2C} className="object-cover h-60 rounded-lg" />
          </div>
          <div className="mb-4">
            <article className="prose text-indigo-100 lg:prose-xl xs:prose-sm max-w-none">
              <p>
                You find yourself in a mess without the recommendation algorithm. When facing some unexpected events, you do not make the best decision. You continue to fight against the unequal terms of use in AIGO. This morning, you plan to work from home.
              </p>
              <p>
                To improve your productivity, you decide to start your day with an ice Americano. You are used to working with your laptop and monitors. The split-screen feature of the monitor can give you great convenience and improve your work efficiency, and luckily this doesn’t require AIGO to function.
              </p>
              <p>
                But the worst is yet to come. Your coffee mug is accidentally knocked over. Fortunately, the spilled coffee only affected the monitor charger instead of your computer. You hastily unplug the monitor. Upon inspection, you find that the charger for your monitor has been damaged. You have to buy a new charging device on Amazon. However, without the help of AIGO's recommendation algorithm, you have to search for the device charger you need (your monitor was bought a long time ago, and you can't quite remember its type). After searching for a long time, you believe you have chosen the right charger type. You want this charging cable delivered to your home quickly. With the use of a monitor, you can speed up your productivity a lot.
              </p>
              <p>
                However, as the new charger arrives, you discover that you have chosen the wrong model. You have to go to an offline store to determine the correct model and buy a new charger. This time, you finally get the charger you needed. But you have wasted too much time on something AIGO can do in seconds.
              </p>
              <p>
                This incident makes you think again about whether to stop resisting and use AIGO again. But you have not forgotten AIGO's reminder that as days pass without using AIGO, the price tag of rejoining AIGO becomes higher day by day.
              </p>
            </article>
          </div>

          <div className="flex items-center justify-center pr-20">
            <Link to="/plot1A">
              <button onClick={() => { window.scrollTo(0, 0); }}
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                &larr; Resubscribe to AIGO, but at an even much higher price.
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-center mt-5 pl-20">
            <Link to="/plot3A">
              <button onClick={() => { window.scrollTo(0, 0); }}
                className="bg-gradient-to-r from-green-500 to-purple-800 hover:from-green-500 hover:to-pink-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                Continue to fight against AIGO, despite all that happened. &rarr;
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default Plot2C