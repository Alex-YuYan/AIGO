import { Link } from "react-router-dom"

const Plot3A = () => (
  <div className="h-full">
    {/* Main */}
    <div className="container mx-auto w-full items-center justify-center flex flex-wrap flex-col md:flex-row items-center">

      {/* Text box */}
      <div className="flex flex-col w-4/5 md:w-3/4 lg:items-start overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-left">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            The reward of insisting is...
          </span>
        </h1>

        <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <article className="prose text-indigo-100 lg:prose-xl xs:prose-sm max-w-none">
              <p>
                You still continue to reject all the terms of AIGO and do everything on your own. You think people always make small mistakes but that is not a big deal.
              </p>
              <p>
                As time goes on, thanksgiving break is coming. You have long decided to take a break in a warmer place. For this vacation, you searched for beautiful cities suitable for tourism like Miami, Las Vegas, and Washington D.C, and for traveling places, amusement parks, and good restaurants out of 32 cities. Then you still have to compare the ticket prices and the hotel prices, choose hotel locations, and book a satisfactory one. You also need to consider whether it is cheaper to rent a car for a few days or cheaper to take uber everywhere. The whole plan for the trip takes you three whole nights to finish. Even if it is so tiring to plan the whole trip, you feel satisfied because you think you have planned everything out perfectly and this is going to be a wonderful trip.
              </p>
              <p>
                However, accidents happen. The break finally comes. When you arrive at the hotel, you go straight to the front desk happily and ask for check-in.
              </p>
              <p>
                “Hi, this is my ID, and I booked one one-person room for three nights.” you say.
              </p>
              <p>
                “Okay, sir,” answers the front desk man, “but I do not see any of your reservations here.”
              </p>
              <p>
                “What? That is not possible! I booked the hotel and paid the payment.”
              </p>
              <p>
                “We are so sorry, sir. I check your name again and it does not show that you have any reservations for our hotel tonight. Are you sure you booked our hotel? Because there are many Hilton hotels in the city and sometimes it is confusing.”
              </p>
              <p>
                You suddenly realize that you might have booked the wrong hotel for tonight. You take out your phone in a hurry and check your email real quick. “Please tell me I booked the right hotel,” you say to yourself. But unfortunately, you still missed the subtitle of the hotel you booked. The hotel you booked is on the west side of the city, but this is the east side and it takes a long time to go there, since the west side is so far away from the tourist attractions. The current solution now is to book another hotel instead.
              </p>
              <p>
                “So sorry about that, I booked the wrong hotel. Do you still have room for three nights?”
              </p>
              <p>
                “Yes sir, we do have a room. But it is a double bed bedroom, and that is the only one we have. Is it okay?”
              </p>
              <p>
                “Okay, how much is it?”
              </p>
              <p>
                “It is $700, tax included.”
              </p>
              <p>
                “It is so expensive,” you say to yourself. But it is very late now, and you are feeling really tired. You know you are booking a hotel for tonight so it is probably expensive as well for other hotels. So you decide to take the room in the end.
              </p>
              <p>
                “If I still use AIGO, this can never happen,” you say to yourself while lying in bed, with a little bit of regret.
              </p>
              <p>
                On the last day of thanksgiving, you go to the airport and prepare yourself for flying back. There are so many people in the airport because it is the last day of thanksgiving break, so it takes so much time to go through the check-in and security gate. Good thing is, you have not missed the flight. But when you come to the gate and want to scan your ticket to get in, the service person says: “Sorry sir, your ticket does not have a seat.”
              </p>
              <p>
                “What do you mean?” you are so confused.
              </p>
              <p>
                “Your ticket is not clear. It is unseated. Let me check what is going on. Oh! It says the ticket is refunded on my computer. Sorry, sir, it seems that we have oversold the flight and apparently you are not informed. This is weird...” He says, "normally, AIGO would take care of this."
              </p>
              <p>
                You cannot believe what is happening. But since you have to go back to work tomorrow, you have to buy another ticket and take another flight.
              </p>
              <p>
                “Okay, do you still have seats left today? Can I buy a ticket for a later flight?” You ask furiously.
              </p>
              <p>&ldquo;You are lucky, sir. There is still one ticket left. It is $500,&rdquo; says him.</p>
              <p>&ldquo;It was only $200 before!&rdquo; </p>
              <p>&ldquo;I'm sorry but you know it is the last day of thanksgiving, and all tickets are sold out quickly, so the price becomes higher.&rdquo;</p>
              <p>You feel so desperate but you know that you have to buy the ticket. In the end, you have to purchase the expensive flight ticket and go back home. On the way home, numerous AIGO advertisements pop up, and you begin wondering if it is the right choice to say no to the trend.</p>
              <p>
                Are you giving up?
              </p>
            </article>
          </div>

          <div className="flex items-center justify-center pr-20">
            <Link to="/plot1A">
              <button onClick={() => { window.scrollTo(0, 0); }}
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                &larr; Sign up for AIGO at a much higher price
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-center mt-5 pl-20">
            <Link to="__Plot__">
              <button onClick={() => { window.scrollTo(0, 0); }}
                className="bg-gradient-to-r from-green-500 to-purple-800 hover:from-green-500 hover:to-pink-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                Fight till the end and never compromise  &rarr;
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default Plot3A