import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-[100%] sm:w-[100%] md:w-[80%] lg:w-[80%]">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl">Is it accessible?</AccordionTrigger>
          <AccordionContent className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lectus dolor, interdum non mattis sed, porta in sem. Phasellus ut lorem porta, sollicitudin ligula in, blandit eros. Fusce condimentum tempus elit, vitae mattis lorem iaculis at. Morbi sagittis enim non maximus pulvinar. Vivamus dui ex, dictum at dolor eget, sagittis interdum ante. Maecenas gravida ante quis velit rhoncus cursus. Nulla id bibendum ligula. Sed suscipit neque est, non tristique dui tristique et.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl">Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-2xl">Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  
   
export default AccordionDemo