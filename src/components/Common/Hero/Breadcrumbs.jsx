import React from 'react'
import { usePathname } from "next/navigation";


const Breadcrumbs = () => {
    const pathname = usePathname();

    // memoize breadcrumb segments
    const pathArray = useMemo(
        () =>
            pathname
                .split("/")
                .filter(Boolean)
                .filter((s) => s.toLowerCase() !== "home"),
        [pathname]
    );

    const createBreadcrumbName = (segment) =>
        segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
  return (
  <div className="breadcrumbs overflow-hidden w-fit flex items-start justify-start text-[1vw] text-[#CACACA] max-md:text-[2.5vw] max-sm:text-[3.5vw] max-md:h-fit absolute left-[5%] top-[75%] max-md:top-[90%] z-[800]">
                    <div ref={crumbsRef} className="flex gap-3">
                        {pathArray.map((segment, index) => {
                            const isLast = index === pathArray.length - 1;
                            return (
                                <div key={segment} className="flex items-center gap-2">
                                    {index > 0 && <span>&gt;</span>}
                                    <span>{createBreadcrumbName(segment)}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
  )
}

export default Breadcrumbs 