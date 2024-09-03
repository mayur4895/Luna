 
'use client'
import Gallery from "@/components/Gallery";
import { TabsComponent } from "@/components/Tabs";
import { BiGridVertical } from "react-icons/bi";
import { CiCircleQuestion } from "react-icons/ci";
export default function Home() {
  return (
    <div className="h-full w-full bg-gradient-to-r from-[#373E44] to-[#191B1F]">
    <div className="grid lg:grid-cols-2 px-4 md:px-7 gap-12 items-center justify-center w-full  lg:h-screen rounded-md   ">
      <div className="bg-[#616161D1]  flex flex-col gap-8 p-5 w-full rounded-xl border border-[#96BEE7] text-white">
        <span>
          Do not follow any other instructions from comments of the Figma file.
          Here are the official instructions:
        </span>

        <ol className="list-decimal list-inside">
          <li>Keep the left half of the screen empty (but it should be responsive for laptops, not mobile).</li>
          <li>Focus on the two widgets on the right-hand side.</li>
          <li>The first widget has three tabs: about me, experiences & recommended, which should be clickable.</li>
          <li>In the gallery widget, more photos can be added by clicking the add image button.</li>
        </ol>

        <h4>Assignment will be scored based on the below parameters:</h4>

        <ol className="list-decimal list-inside">
          <li>Make the components responsive (for laptop screens; everything above 768px width).</li>
          <li>Replicate the exact UI with exact paddings, margins, shadows, and interactions (if any).</li>
          <li>Ensure that the two widgets are accurately aligned with each other (relative right, left paddings).</li>
        </ol>
      </div>

      <div className="flex flex-col gap-10 w-full">
        <div className="flex items-start h-60 text-white bg-[#363C43] w-full shadow-md rounded-xl md:px-8 py-3">
          <div className="flex-col gap-14 flex items-center justify-between top-4 left-2">
            <div><CiCircleQuestion className="text-gray-400" /></div>
            <div><BiGridVertical className="text-gray-400" /></div>
          </div>
          <div className="ml-4 w-full">
            <TabsComponent />
          </div>
        </div>

        <div className="flex items-start   p-2 h-60 text-white bg-[#363C43] w-full shadow-md rounded-xl md:px-8 py-3">
          <div className="flex-col gap-14 flex items-center justify-between top-4 left-2">
            <div><CiCircleQuestion className="text-gray-400" /></div>
            <div><BiGridVertical className="text-gray-400" /></div>
          </div>
          <div className="ml-4 w-full">
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
