import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Monthly from "./Monthly";
import Anually from "./Anually";

function Pricing() {
  return (
    <div className="container pt-5 sm:pt-5 md:pt-7 lg:pt-[7rem]">
      <div className="w-100">
        <div className="flex flex-col">
          <div className="text-center">
            <h1 className="text-[rgb(239,54,24)] text-4xl sm:text-4xl md:text-6xl font-bold">
              Simple, transparent pricing
            </h1>
            <p className="text-md text-slate-700 pt-[2rem]">
              We believe Untitled should be accessible to all companies, no
              matter the size.
            </p>
          </div>

          <div className="py-10">
            <Tabs defaultValue="account" className="w-100 flex flex-col items-center">
              <div className="flex justify-center">
                <TabsList className="w-[400px] flex justify-around py-1">
                  <TabsTrigger value="account" className="text-lg py-2">
                    Monthly biling
                  </TabsTrigger>
                  <TabsTrigger value="password" className="text-lg">
                    Annualy biling <span className="text-md"> Save 20%</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="pt-0">
                <TabsContent value="account">
                  <Monthly />
                </TabsContent>
                <TabsContent value="password">
                  <Anually />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
