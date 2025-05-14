import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ContactCard() {
  return (
    <form
  action="https://formsubmit.co/fatima.zohra10122007@gmail.com"
  method="POST"
  className="space-y-4"
>
    <Card className="sm:w-full w-fit  rounded-lg bg-[#F9F9F9] border-solid border-2 border-[#035096] shadow-[10px_10px_0_rgba(3,80,150,1)]">
    
      <CardContent className="space-y-4 ">
        <p className="sm:text-[14px] text-[12px] text-gray-700">
          Whether you have a question, feedback, or just want to connect, feel
          free to reach out.
        </p>
     <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Label htmlFor="name" className="sm:text-[16px] text-[12px]">Name</Label>
              <Input id="name" name="name" placeholder="Enter you Name" className="sm:text-[16px] text-[12px]" required/>
           
     </div>
     <div className="flex sm:flex-row items-center space-x-2 text-sm text-gray-600">
          <Label htmlFor="email" className="sm:text-[16px] text-[12px]">Email</Label>
              <Input id="email" name="email" placeholder="Enter your Email" className="sm:text-[16px] text-[12px]" required/>
           
     </div>
       <div className="flex items-center  text-sm text-gray-600">
          <Label htmlFor="Your Query" className="sm:text-[16px] text-[12px]">Enter You Query!</Label>
             <Textarea id="Your Query" name="message" placeholder="Feel Free to ask any question" className="sm:text-[16px] text-[12px]" required/>
           
     </div>
     <div className="flex items-center  text-sm text-gray-600">
          <Button variant="default" size="default">Submit! </Button>
     </div>
       <input type="hidden" name="_captcha" value="false" />
<input type="hidden" name="_next" value="http://localhost:3000/Component/CTA/thank" />


     </CardContent>
    </Card>
    </form>
  );
}
