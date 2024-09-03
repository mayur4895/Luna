import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function  TabsComponent() {
  return (
    <Tabs defaultValue="aboutme" className="w-full h-56">
      <TabsList className="grid text-sm w-full px-2 grid-cols-3 gap-2 bg-zinc-800">
        <TabsTrigger value="aboutme" className="text-sm">About me</TabsTrigger>
        <TabsTrigger value="experiences" className="text-sm">Experiences</TabsTrigger>
        <TabsTrigger value="recommonded" className="text-sm">Recommonded </TabsTrigger>
      </TabsList>
      <TabsContent value="aboutme">
      <div className="  text-[#969696] font-sans h-full w-full   "> 
 Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
   I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a... 
</div>
      </TabsContent>
      <TabsContent value="experiences">
      <p className="  text-[#969696] font-sans ">
 
 Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
 
 <br /> <br /> ed in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a... 
</p>
      </TabsContent>

      <TabsContent value="recommonded">
      <p className="  text-[#969696] font-sans ">
 
 Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
 
 <br /> <br />
  I was born and raised in Alban years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a... 
</p>
        </TabsContent>
    </Tabs>
  )
}
