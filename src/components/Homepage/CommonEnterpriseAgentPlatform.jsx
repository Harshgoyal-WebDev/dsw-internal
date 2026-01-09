"use client";

import { useEffect, useState } from "react";

import EnterpriseAgentPlatformMobile from "./EnterpriseAgentPlatformMobile";
import EnterpiseAgentPlatform from "./EnterpiseAgentPlatform";


export default function CommonEnterpriseAgentPlatform() {
    const [isMobile,setMob] = useState(false);
    useEffect(()=>{
     if(globalThis.innerWidth<1024){
       setMob(true)
     }
     else{
       setMob(false)
     }
    },[isMobile])
 
 
  return isMobile ? <EnterpriseAgentPlatformMobile /> : <EnterpiseAgentPlatform/>;
}