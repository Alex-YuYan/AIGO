import { Link } from "react-router-dom"

const Summary = () => (
    <div className="h-full">
        {/* Main */}
        <div className="container mx-auto w-full items-center justify-center flex flex-wrap flex-col md:flex-row items-center">

            {/* Text box */}
            <div className="flex flex-col w-4/5 md:w-3/4 lg:items-start overflow-y-hidden">
                <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-left">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                        Summary
                    </span>
                </h1>

                <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <article className="prose text-indigo-100 lg:prose-xl xs:prose-sm max-w-none">
                            <p>Our book illustrates mainly three aspects of ethics we discussed this semester, namely data ethics, institutional ethics, and automation ethics.&nbsp;</p>
                            <p>Throughout the book, the protagonist faces only one conflict and struggle: whether to give up personal information as a tradeoff for convenience in daily life, and this simple choice affects all three aspects of ethics that we are discussing.</p>
                            <p>This is actually a conflict that we face every day when we use apps on our smartphones and every time we submit our information to some online forms. Something that we might not realize in real life is that each time we grant apps our private information, we could be helping them train their own AI models. We are users but at the same time, we are their training sets. A core focus of our book is that we should always be aware of how our data is used, instead of accepting all the terms &amp; conditions until we find out it is somewhat too late. In the book, our prevision of what will happen in the future is that at first, when the companies are integrating their APIs together, people are not aware and nobody stands out to question the legitimacy of doing so. And in the end, this has led to disastrous consequences. Yet the reality is that people are actually not reading the terms and conditions for their own benefit of using that service. This unintentional technological myopia, in terms of data ethics, is actually implicitly helping many companies collect user information in an unrestricted manner. This part of the book is meant to draw our audience&rsquo;s attention to something that we don&rsquo;t normally care about in daily life and raise concerns regarding data privacy and data ethics in general.</p>
                            <p>Institutional ethics refers to the application of ethics in social organizations, professional organizations, and other organizations. Institutions should have responsibilities and obligations for their actions. In this story, AIGO is a combination of many technologies necessary for life, including food ordering, navigation, searching, and so on. If the companies were to follow institutional ethics in the first place, such a cartel like AIGO should not be established in the first place. However, there have long been disputes on the regulation of artificial intelligence. It is easy for companies to find a loophole and thus create such a powerful organization secretly. Then, its powerful recommendation algorithm can gradually &ldquo;force&rdquo; people to accept its terms of use (use all personal privacy). Although AIGO claims that it will do its best to protect all users&apos; data from leaks, misuse, and attacks, the protagonist of one side of the story appears to have had his privacy leakage after using AIGO and quitting. He&apos;s been getting harassing phone calls, stolen messages, etc. AIGO should be responsible for this, whether the data is hacked or sold by AIGO itself. The appalling fact is that in this case, everyone is living under the shadow of a powerful algorithm, and whoever controls it controls everything. This is clearly an unacceptable practice of institutional ethics.</p>
                            <p>When it comes to automation ethics, people who use AIGO can have a priority to access and get benefits from different areas because artificial intelligence automatically takes over all the jobs, but people who do not use AIGO may lose the opportunity to know what is going on and the right to take the initiative. AI will help people gain unequal access to certain sources of information. For example, in the article, the flight is oversold for customers. However, for people who use AIGO to buy the ticket, AIGO will remind them that the flight is oversold and will lock a seat for them automatically. They will not worry about the cancellation of the tickets. For people who buy their tickets themselves, on the other hand, they are not informed that the tickets are oversold and therefore they will lack time to lock their seats or buy a new ticket. The worst result is they get to know that their tickets got canceled at the gate but all the seats are taken by others who use AIGO. This is critical because traditionally we also have problems of unequal distribution of choices and resources when processes are automated, but in this particular case we discussed in our book, AI models are faster than any process and therefore the people who have their legal rights deprived might not even realize this. They are out of the contest in the very first milliseconds, and thus this creates a huge discrepancy.&nbsp;</p>
                        </article>
                    </div>

                    <div className="flex items-center justify-center">
                        <Link to="/">
                            <button onClick={() => { window.scrollTo(0, 0); }}
                                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                                type="button"
                            >
                                Start Over
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
)

export default Summary