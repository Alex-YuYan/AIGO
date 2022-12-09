import { Link } from "react-router-dom"

const Plot1B = () => (
  <div className="h-full">
    {/* Main */}
    <div className="container mx-auto w-full items-center justify-center flex flex-wrap flex-col md:flex-row items-center">

      {/* Text box */}
      <div className="flex flex-col w-4/5 md:w-3/4 lg:items-start overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-left">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            So you said no...
          </span>
        </h1>

        <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <article className="prose text-indigo-100 lg:prose-xl xs:prose-sm max-w-none">
              <p>
                You're afraid of your privacy being completely transparent. Meanwhile, you think you can live just fine without the recommendation algorithm. Therefore, you reject the new terms of AIGO. Suddenly, AIGO disappears from your life. You're proud to think you're protecting your privacy.
              </p>
              <p>
                It's a work day. You need to get to work from your house. You open the navigation as usual, but you find that the navigation doesn't give you the best route. Since AIGO is no longer active, you have to choose the best path for yourself. Naively thinking it is an easy task, you go straight to the shortest path on the map. However, you didn't notice that your Tesla Model ZZZ was running out of power. There are no charging points on the road you choose. So, you have to pull over and reroute. The choice you made causes you to take a long detour to a charging station. When you arrive at work, you are already more than an hour late.
              </p>
              <p>
                You will have to plan your day ahead of time, starting today. Tomorrow, you will need to work all day to make up for today's lateness.
              </p>
              <p>
                After work, you feel like exploring a new restaurant. This time, you are learning to plan ahead of time, and the journey doesn't surprise you. It is a happy thing for you to find out that you can still adapt to life without AIGO. The restaurant, Jancang, is a new and fancy Chinese restaurant around your place. You love Chinese food and think you can do without the help of any recommendation algorithms. However, when you take an actual look at the menu, the style of the restaurant appears to be very different from any other restaurant you have ever been to. You're not sure what you should order. At this very moment, you start to miss the help of AIGO. What will you do?
              </p>
            </article>
          </div>

          <div className="flex items-center justify-center pr-20">
            <Link to="/plot1A">
              <button onClick={() => {window.scrollTo(0, 0);}}
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                &larr; Re-subscribe to AIGO, but this time at a higher price.
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-center mt-5 pl-20">
          <Link to="/plot2C">
            <button onClick={() => {window.scrollTo(0, 0);}}
              className="bg-gradient-to-r from-green-500 to-purple-800 hover:from-green-500 hover:to-pink-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="button"
            >
              Not getting recommendations for food is no big deal. &rarr;
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default Plot1B