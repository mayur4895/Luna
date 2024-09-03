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
import { ScrollArea } from "./ui/scroll-area"

export function  TabsComponent() {
  return (
    <Tabs defaultValue="aboutme" className="w-full h-56">
      <TabsList className="grid text-sm  px-4 grid-cols-3 gap-1 bg-zinc-800">
        <TabsTrigger value="aboutme" className="text-sm ">About me</TabsTrigger>
        <TabsTrigger value="experiences" className="text-sm ">Experiences</TabsTrigger>
        <TabsTrigger value="recommonded" className="text-sm ">Recommonded </TabsTrigger>
      </TabsList>
      <TabsContent value="aboutme">
      <ScrollArea className=" overflow--clip  text-[#969696] font-sans h-40 w-full   "> 
 
 Hello! I am Dave, your sales rep  I was born and raised in Albany, NY here from Salesforce. I have been working at this awesome company for 3 years now.
 I was born and rai  my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a... 
 I was born and raised in Albany, NY& have been living  I was born and raised in Albany, NY& have been living 
</ScrollArea>
      </TabsContent>
      <TabsContent value="experiences">
      <ScrollArea className=" overflow--clip  text-[#969696] font-sans h-40 w-full   "> 
 Hello! Im Dave, your sales rep here from Salesforce. Ive been working at this awesome company for 3 years now.
   in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a... 
</ScrollArea>
      </TabsContent>

      <TabsContent value="recommonded">
      <ScrollArea className=" overflow--clip  text-[#969696] font-sans h-40 w-full   "> 
 
 Hello! Im Dave, your sales rep here from Salesforce. Ive been working at this awesome company for 3 years now.
 
 
  I was born and raised in Alban years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a... 
</ScrollArea>
        </TabsContent>
    </Tabs>
  )
}
