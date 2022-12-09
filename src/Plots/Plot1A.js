import { Link } from "react-router-dom"

const Plot1A = () => (
  <div className="h-full">
    {/* Main */}
    <div className="container mx-auto w-full items-center justify-center flex flex-wrap flex-col md:flex-row items-center">

      {/* Text box */}
      <div className="flex flex-col w-4/5 md:w-3/4 lg:items-start overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-left">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            You are now a loyal customer...
          </span>
        </h1>

        <div className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <article className="prose text-indigo-100 lg:prose-xl xs:prose-sm max-w-none">
              <p>
                “Congratulations! You've accepted the new terms of AIGO! Now we can provide you with recommendations for restaurants, tickets, hotels, and almost everything! We will make sure your life will be more convenient than ever before!”  AIGO projects this message in front of you. You decided to accept the terms of AIGO and let it take over all your personal data for future convenience.

                <p>
                  “Well, let's try if this works. Give me recommendations for today's lunch.”
                </p>
                <p>
                  “AIGO on the way! Just one moment.” AIGO says.
                </p>
                <p>
                  After a few seconds, AIGO projects that: “According to your meals, snacks, groceries you bought and restaurants, convenience store, and takeaway software you used for the last three months, our recommendation for today are: bacon cheeseburger from Shake Shack, Spaghetti from Maestro pasta, and pepperoni pizza from Nino Bellissima Pizza. You can select any choice you like.”
                </p>
                <p>
                  “Well, these three sound pretty good, I do like American food and go to these restaurants very often,” you are satisfied.
                </p>
                <p>
                  You then click on “Spaghetti from Maestro pasta” and decide to try this one for today's lunch.
                  “Okay, would you like the food to be delivered or go to the restaurant? Please choose one.”
                  “I want the food to be delivered,” you say.
                </p>
                <p>
                  “Great! The food is on the way! We've already created the order to the restaurant and ordered your favorite spaghetti carbonara, and we automatically generate the notes to the restaurant: "please no green onions, add utensils and tissues, leave it at the door", with the usual 12% tip you give to this restaurant. The payment is made with your credit card. The food will be delivered in approximately 34 minutes. Later you can ask for the delivery man's location and see how the delivery process goes. We will remind you when the food is delivered. Enjoy your day!”
                </p>

                <p>
                  “Wow, that's pretty quick. AIGO already does everything for me. I can just play video games and wait for my lunch. So convenient!” you feel very happy.
                  Since then, if you want to go anywhere, AIGO automatically calls an uber for you. If you want to buy something, AIGO automatically orders the type of product you want. If you want to travel for a break, AIGO even automatically generates the location you would like to go to and books the hotels, and buys flight and amusement park tickets already! You basically need to worry about nothing in your life. You just take the recommendation for the AIGO and let it take over your plan for every day. You find your life more convenient than ever, even if you go to an entirely new restaurant, AIGO will always provide you with a choice that you love. When you want to buy a gift for something for someone, AIGO will always pick the one that makes everyone happy. You start to enjoy the new brand new life with AIGO.
                </p>

                <p>
                  One day you decide to invite some friends to your home and want to cook for them, so you search the online grocery stores. Suddenly you find one new grocery store you've never seen near your house, and the price is cheaper than AIGO usually recommends to you. You think this might be a new store and AIGO will recommend this store today so you ask: “AIGO, give me the choice of the grocery store I can go to.” “Yes, sir. We commend you to the Harris Teeter and Orchard Grocer Grocery store.” “It is so strange, why does AIGO not recommend to me a cheaper grocery store like the one I found?” You realize that the algorithm is only recommending you products that are at a higher-than-usual price. You now want to refuse the choice AIGO recommends to you and select a cheaper alternative manually, but then AIGO pops up and says: “Sir if you do so,  you will be automatically removed from the recommendation system.”
                </p>
                <p>
                  Now you are caught in a dilemma. Should you choose to continue using AIGO since it has brought so much convenience to your life? Or should you give up AIGO, and do things manually for a potentially better choice?
                </p>
              </p>
            </article>
          </div>

          <div className="flex items-center justify-center pr-20">
            <Link to="/plot1A">
              <button
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                &larr;
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-center mt-5 pl-20">
            <button
              className="bg-gradient-to-r from-green-500 to-purple-800 hover:from-green-500 hover:to-pink-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="button"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Plot1A