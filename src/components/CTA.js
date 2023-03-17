import bot from "../assets/imgs/HomePage/CTA bot.svg";

export default function CTA() {
  return (
    <div className="bg-white px-4 md:px-8 lg:px-12 xl:px-container">
      <div className="flex">
        <div className="pl-2 md:pl-12 lg:pl-32 pt-10">
          <img src={bot} alt="CTA bot" />
        </div>
        <div className="text-center text-4xl font-semibold leading-relaxed pl-5 pt-10 w-3/4">
          <p>See Handle improve your customer acquisition</p>
          <p> with a<span className="text-blue-600"> FREE</span> 14-day trial!</p>
        </div>
      </div>
      <div className="text-center pl-0 lg:pl-20 py-8">
        <button className="primary-btn p-3 w-56">Try for Free</button>
      </div>
    </div>
  );
}
