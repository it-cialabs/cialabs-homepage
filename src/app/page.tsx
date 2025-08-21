import HomeLayout from "@/components/high-level/home/layout";
import { PlaceholdersAndVanishInputDemo } from "@/components/high-level/PlaceholdersAndVanishInputComp";

export default function Home() {
  return (
    <HomeLayout>
      <div className="absolute -z-50 hidden md:block   translate-x-[1%] ">
        <img src="blur-green-bg.png" alt="bg image" className="" />
      </div>

      <div className="absolute -z-50  block md:hidden   ">
        <img src="blur-green-bg-mob.png" alt="bg image" className="" />
      </div>
      <div className="translate-y-[-10%]  z-40">
        <PlaceholdersAndVanishInputDemo />
      </div>
    </HomeLayout>
  );
}
