import type { MetaFunction } from "@remix-run/node";
import NavbarProvider from "~/components/contexts/NavbarProvider";
import AddTravel from "~/components/elements/travels/AddTravel";
import LogoBig from '~/assets/newlogo.png'
export const meta: MetaFunction = () => {
  return [
    { title: "Safari" },
  ];
};

export default function Index() {
  return (
    <NavbarProvider>
      <div className="pt-5">
        <div className="flex items-center justify-center py-6">
          <img src={LogoBig} className="w-[400px]"alt="logo" />
        </div>
       <AddTravel/>
      </div>
    </NavbarProvider>
   
  );
}


