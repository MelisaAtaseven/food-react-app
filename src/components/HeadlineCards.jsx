import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3  gap-6 ">
      {/* card */}
      <div className="rounded-xl relative ">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className=" font-bold text-2xl px-2 pt-4 ">
            Sun's Ou/t, BOGO's Out
          </p>
          <p className=" px-2">Through</p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-4 ">
            Order Now
          </button>
        </div>
        <img
        className='max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl '
          src=" https://images.unsplash.com/photo-1553163147-622ab57be1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>

       {/* card */}
       <div className="rounded-xl relative ">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className=" font-bold text-2xl px-2 pt-4 ">
            New Restaurants 
          </p>
          <p className=" px-2">Added Daily</p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-4 ">
            Order Now
          </button>
        </div>
        <img
        className='max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl '
          src="https://images.unsplash.com/photo-1600891964532-839fb6407dd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>

       {/* card */}
       <div className="rounded-xl relative ">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className=" font-bold text-2xl px-2 pt-4 ">
            We Deliver Desserts Too
          </p>
          <p className=" px-2">Tasty Treats</p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-4 ">
            Order Now
          </button>
        </div>
        <img
        className='max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl '
          src=" https://images.unsplash.com/photo-1600891963935-9e9544daf776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
