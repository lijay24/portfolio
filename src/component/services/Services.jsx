import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
const Services = () => {
  return (
    <div className=" text-black p-5">
      <main className="text-center">
        <header className="font-bold text-4xl">
          Services<span className="text-[#FD5956] text-4xl">.</span>
        </header>

        <p className="lg:w-[50%] lg:mx-auto lg:my-0">
          Our team members are experts in all facets of the design industry
          including: print design, illustration, branding, identity and more.
        </p>
      </main>
      <section className=" grid place-content-center mt-10 gap-5 md:grid-cols-3 lg:place-items-center">
        <div className="p-5 max-w-64 hover:shadow-xl">
          <article className="h-[100px]">
            <img className="h-full" src={icon1} alt="ui/ux design" />
          </article>
          
          <div className="mt-10">
            <header className="font-bold text-xl mb-3 text-justify">UI/UX Design</header>
            <p>
              Why money &apos;s in that office, right If she start giving me
              some bullshit about it ain't there someplace or anywhere.
            </p>
          </div>
        </div>

        <div className="p-5 max-w-64 hover:shadow-xl">
          <article className="h-[100px]">
            <img className="h-full" src={icon2} alt="web" />
          </article>
          <div className="mt-10">
            <header className="font-bold text-xl mb-3 text-justify">Web Design</header>
            <p>
              Why money &apos;s in that office, right If she start giving me
              some bullshit about it ain't there someplace or anywhere.
            </p>
          </div>
        </div>

        <div className="p-5 max-w-64 hover:shadow-xl">
          <article className="h-[100px]">
            <img className="h-full" src={icon3} alt="wp dev" />
          </article>
          <div className="mt-10">
            <header className="font-bold text-xl mb-3 text-justify">WP Developing</header>
            <p>
              Why money &apos;s in that office, right If she start giving me
              some bullshit about it ain't there someplace or anywhere.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
