"use client"
import ImageComponent from '../../components/spline';
import dynamic from "next/dynamic";
const FormComponent = dynamic(() => import("@/components/forms"), { ssr: false });

export default function Signup() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Half - Black Background */}
      <div className="w-1/2 bg-black flex justify-start items-center">
        <div className="w-full max-md:flex justify-start pr-80 pl-20">
          <FormComponent />
        </div>
      </div>
      {/* Right Half - Image Component */}
      <div className="w-1/2 flex justify-center items-center">
        <ImageComponent />
      </div>
      
    </div>
  );
}
