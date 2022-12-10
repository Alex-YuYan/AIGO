import { Link } from "react-router-dom"
import ending2 from '../Images/ending2.png'

const Ending2 = () => (
  <div className="h-full">
    {/* Main */}
    <div className="container mx-auto w-full items-center justify-center flex flex-wrap flex-col md:flex-row items-center">

      {/* Text box */}
      <div className="flex flex-col w-4/5 md:w-3/4 lg:items-start overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-left">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            Ending 2: Nice try
          </span>
        </h1>

        <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="flex items-center justify-center pb-5">
            <img src={ending2} className="object-cover h-60 rounded-lg" />
          </div>
          <div className="mb-4">
            <article className="prose text-indigo-100 lg:prose-xl xs:prose-sm max-w-none">
              <p>A short recap: your data has already been leaked out, and AIGO is still using your private information. Now you have very little privacy left and have lost the convenience provided by AIGO. If you want to accept it again, you need to pay a huge amount of money.&nbsp;</p>
              <p>You&apos;re angry that AIGO is forcing you to accept its terms without limits, and even if you want to rejoin, the cost is also higher than ever. You know that even doing that won&apos;t save your compromised data. Reactivating AIGO only blocks nuisance calls, but your data can still be used maliciously, even to deceive your family members. So, you decided to gather evidence under the table and prepare to expose AIGO&apos;s crimes to the world. Through your tireless efforts, you have gleaned many secrets about AIGO. You decide to publish these secrets online.&nbsp;</p>
              <p>However, your post will only be seen by users who have not accepted AIGO&apos;s recommendation algorithm. You have missed the critical piece &ndash; the ones who are using AIGO can&rsquo;t see it, and the ones who are not don&apos;t need your information.</p>
              <p>You can&apos;t reconcile yourself to the fact that the evidence you gathered is useless. Just as you&apos;re wondering whether to go to court and sue AIGO, you get a letter from AIGO&apos;s PR team. They want you to immediately delete all the bad things you said about AIGO and apologize publicly. Otherwise, they will sue you for malicious defamation, and malicious dissemination of false information.&nbsp;</p>
              <p>You think you have enough evidence to not be afraid of prosecution. So, you decide to go ahead and sue them for leaking user privacy. Soon, you are facing off against the opposing counsel in court. But, you are not aware that they bought off the jury and the judge, who also uses AIGO.&nbsp;</p>
              <p>Your plan goes in vain and you are ordered to pay AIGO $500,000, plus apologizing in public. It&apos;s a lot of money for you, but you&apos;re going to have to pay or you&apos;re going to stay in prison for 10 years.&nbsp;</p>
              <p>You end up in jail. It&rsquo;s a good place to be, honestly, because now there are no bothersome calls and no AIGO. You have achieved your success.</p>
            </article>
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

export default Ending2