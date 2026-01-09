"use client";

import { useEffect, useState } from "react";
import EnterpriseAIPlatformMobile from "./EnterpriseAIPlatformMobile";
import EnterpriseAIPlatform from "./EnterpriseAIPlatform";


export default function CommonEnterpriseAIPlatform() {
    const [isMobile,setMob] = useState(false);
    useEffect(()=>{
     if(globalThis.innerWidth<1024){
       setMob(true)
     }
     else{
       setMob(false)
     }
    },[isMobile])
 
 
  return isMobile ? <EnterpriseAIPlatformMobile /> : <EnterpriseAIPlatform />;
}