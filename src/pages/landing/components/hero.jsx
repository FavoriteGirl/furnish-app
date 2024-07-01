import { heroBg } from "../../../assets";

const Hero = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-[#DCD4C9] place-content-center">
        <div className="mx-auto w-fit flex flex-col items-start gap-y-4 p-40">
        <div className="flex flex-col text-5xl">
          <span className="font-thin">Best Design of</span>
          <span className="font-bold">Furniture Collections</span>
          </div>
         
            <p>Crafting Comfort, Creating Homes.</p>
            <button className="bg-white px-6 py-2 rounded-full drop-shadow-lg text-yellow-950">DISCOVER</button>
        </div>
         
       
      </div>

      <div className="w-1/2">
        <img src={heroBg}
          alt="hero background"
          className="object-cover w-full h-full" />
      </div>
    </div>
  )
};

export default Hero;