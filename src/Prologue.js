import { Link } from "react-router-dom"

const Prologue = () => (
    <div className="h-full">
      {/* Main */}
      <div className="container mx-auto w-full items-center justify-center flex flex-wrap flex-col md:flex-row items-center">

        {/* Text box */}
        <div className="flex flex-col w-4/5 md:w-3/4 lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-left">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              Prologue
            </span>
          </h1>

          <div className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <article className="prose text-indigo-100 lg:prose-xl xs:prose-sm max-w-none">
                <p>
                One day, you wake up to find that AIGO has updated its terms of use. It now requires all your personal data, for the purpose of providing more accurate recommendations. On the basis of the basic personal information you have granted it before, it now includes your financial information, healthcare record, and even access to the surveillance cameras at your workplace and home, which you installed to prevent theft.
                </p>
                <p>
                At first, you are shocked, but soon realize that the benefits of AIGO can very easily outweigh the risks associated with giving up your personal data. With its help, you can now shop, find entertainment, and even manage your finances with super ease. All in all, you are just a normal person, what is AIGO to steal from you?
                </p>
                <p>
                However, you still retain some worry about the implications of giving up your personal data. You worry about who will have access to it, and what they might do with it. And even if AIGO reassures you nearly every single minute that your personal data will not be misused, you still feel that you are somewhat becoming a “transparent” person. 
                </p>
                <p>
                But now, the choice lies in front of you. Either you choose to accept the terms and continue to enjoy the benefits of a super smart recommendation system, or you lose access to it, and who knows what the cost of re-subscribing to AIGO will be?
                </p>
              </article>
            </div>

            <div className="flex items-center justify-center pr-20">
              <Link to="/plot1A">
              <button onClick={() => {window.scrollTo(0, 0);}}
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                &larr; Accept AIGO's updated terms and conditions
              </button>
              </Link>
              </div>
              <div className="flex items-center justify-center mt-5 pl-20">
              <button
                className="bg-gradient-to-r from-green-500 to-purple-800 hover:from-green-500 hover:to-pink-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                Reject and start your day without the help of AIGO &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
)

export default Prologue