import statue from "../assets/statue.png";
const History = () => {
  return (
    <section className="bg-base w-full py-10 px-32 relative">
      <div className="absolute bottom-0 left-0 w-2/5 h-[88%] bg-black z-10"></div>
      <div className="absolute bottom-0 right-0 w-full h-3/6 bg-black z-10"></div>
      <div class="absolute lg:w-[700px] lg:h-[700px] rounded-full border-[8px] border-white/90 shadow-[0_0_20px_5px_rgba(255,255,255,0.8)] right-64 top-20"></div>
      <div class="absolute lg:h-[600px] border border-white/20 right-[22%] top-8 z-10"></div>
      <div class="absolute lg:h-[500px] border border-white/20 left-[42%] top-32 z-10"></div>
      <div class="absolute lg:w-[900px] border border-white/20 right-0 top-32 z-10"></div>
      <div class="absolute lg:w-[700px] border border-white/20 left-32 bottom-[54%] z-10"></div>
      <div className="px-10 text-white flex gap-14 items-center justify-center">
        <div className="flex flex-col gap-5 w-1/5 z-10">
          <h1 className="text-7xl mt-28">The World’s Leading Statue Museum</h1>
          <p className="text-md font-poppins">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            et, condimentum iaculis ac. Enim leo sit vestibulum vulputate
            placerat vulputate. Quis egestas pellentesque faucibus scelerisque
            consectetur amet. Imperdiet in posuere tempus enim sit semper turpis
            faucibus lectus. Eget et tempor dolor, amet,
          </p>
        </div>
        <div className="p-10 flex flex-col w-3/5 gap-10 z-10">
          <div className="flex justify-center items-center mt-28">
            <img src={statue} alt="statue" className="w-[450px]" />
          </div>

          <p className="text-md font-poppins bottom-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            et, condimentum iaculis ac. Enim leo sit vestibulum vulputate
            placerat vulputate. Quis egestas pellentesque faucibus scelerisque
            consectetur amet. Imperdiet in posuere tempus enim sit semper turpis
            faucibus lectus. Eget et tempor dolor, amet, vel sit tellus sem.
            Lectus sed leo neque ut id nunc, amet. Ante non, tortor nisl, vitae
            orci lacus ipsum vehicula eu. Bibendum.
          </p>

          <button className="w-14 h-14 rounded-full bg-secondary overflow-visible transform duration-300 ease-in-out hover:bg-base hover:shadow-xl">
            <p className="text-2xl absolute top-3 ml-6 w-[140px] font-poppins">
              Know More
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};
export default History;
