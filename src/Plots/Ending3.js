import { Link } from "react-router-dom"

const Ending3 = () => (
  <div className="h-full">
    {/* Main */}
    <div className="container mx-auto w-full items-center justify-center flex flex-wrap flex-col md:flex-row items-center">

      {/* Text box */}
      <div className="flex flex-col w-4/5 md:w-3/4 lg:items-start overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-left">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            Ending 3: Eternal remorse
          </span>
        </h1>

        <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <article className="prose text-indigo-100 lg:prose-xl xs:prose-sm max-w-none">
              <p>It is a normal day of fighting AIGO. You still believe that not giving all your private information to AIGO is the correct choice. Although your life is not that convenient, you can still. Unfortunately, one day the bad news comes that your last remaining relative, your father, suddenly calls to say that he is feeling very unwell and asks if you could hurry over to see him and bring him to the hospital.&nbsp;</p>
              <p>You can hear dad&rsquo;s voice is really weak through the phone, so you have a bad feeling that something worse is going to happen. However, as usual, you do not have AIGO&apos;s recommendation of which route is faster and end up stuck in a traffic jam on your way to visit dad since you cannot use any AIGO-powered map software.&nbsp;</p>
              <p>When you walk into his place, you find him lying painfully on the ground, with a cup of hot coffee spilled all over the place. You call the ambulance and you want to do something before they come to better save dad. But you never received training on Cardiopulmonary Resuscitation. You are just hoping someone&rsquo;s here to tell you what to do. You tried to use search engines, but now search engines only work with AIGO enabled.&nbsp;</p>
              <p>At this very moment, you recall that last time your friend Leo used AIGO to get the correct medication and healthcare service for his heart attack in time. You quickly went to the AIGO website and looked for the option to resubscribe and save his life. But then you see the signup fee is now over $100,000. You don&rsquo;t want to give up your fight against this, yet you are not financially empowered to do so.&nbsp;</p>
              <p>Soon the ambulance comes, but sadly after an untimely resuscitation, they can not save him. They tell you that if you have done something before the ambulance arrives, things can be very different. You blame yourself so much because if you have not decided to fight against AIGO, these tragedies can never happen.&nbsp;</p>
              <p>After dad&rsquo;s death, you are more determined. You end up living an epic life as one of the heroes fighting against AIGO, at the cost of lifelong remorse.&nbsp;</p>
            </article>
          </div>

          <div className="flex items-center justify-center pr-20">
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

export default Ending3