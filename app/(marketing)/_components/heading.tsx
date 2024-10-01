"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
  return (
    <>
      <div className="max-w-6xl space-y-4">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl">
          Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
          <span className="underlined">Jotion</span>{" "}
        </h1>
        <h3>
          Jotion is the connected workspace where <br /> better, faster work
          happens.
        </h3>
        <Button>
          Enter Jotion
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </>
  );
};

export default Heading;
