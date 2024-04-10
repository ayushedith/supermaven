"use client";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Beambg from "./Beambg";
import Typer from "./Typer";
import Tab from "./Tab";
import Highlighter from "./Highlight";

export function Tracer() {
  return (
  <>
  <Beambg />
    <div className="flex flex-col items-center justify-center">
      <Typer/>
      <Highlighter />
    </div>
    <TracingBeam className="px-6">
      <Tab />
    </TracingBeam>
  </>
    
  );
}

