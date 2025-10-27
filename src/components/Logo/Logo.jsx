import { Dumbbell } from "lucide-react";
import React from "react";

const Logo = () => (
  <div className="flex items-center gap-2">
    <Dumbbell size={32} className="text-green-400" />
    <h3 className="text-2xl font-extrabold text-green-400 tracking-wide">
      Fit<span className="text-green-300">Zone</span>
    </h3>
  </div>
);

export default Logo;
