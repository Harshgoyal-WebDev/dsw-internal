"use client";

import { useEffect, useState } from "react";
import ArchitectureMobile from "./ArchitectureMobile";
import Architecture from "./Architecture";


export default function CommonArchitecture() {
    const [isMobile,setMob] = useState(false);
    useEffect(()=>{
     if(globalThis.innerWidth<1024){
       setMob(true)
     }
     else{
       setMob(false)
     }
    },[isMobile])
 
 
  return isMobile ? <ArchitectureMobile /> : <Architecture />;
}