import Image from "next/image";
import React from "react";
import Copy from "../Animations/Copy";
import Clients from "../AboutPage/Clients";

const AwardItem = ({ img}) => {
  return (
    <>
      <div className="flex-shrink-0 flex items-center justify-center gap-[1vw] w-[15vw] max-md:w-[70vw] max-sm:w-fit  max-md:gap-[2vw]">
        <div className="w-[12vw] h-auto max-md:w-[18vw] max-sm:w-[20vw]">
          <Image
            src={img}
            height={130}
            width={190}
            alt={"open source"}
            className="h-full w-full"
          />
        </div>
      </div>
    </>
  );
};
const Expertise = () => {
    const firstHalfAwards = awards.slice(0, Math.ceil(awards.length / 2));
  const secondHalfAwards = awards.slice(Math.ceil(awards.length / 2));

  return (
    <section
      id="recognized"
      className="h-full w-screen  relative overflow-hidden container bg-white !py-[8%]"
    >
      <div className="w-full h-full flex flex-col items-center justify-center relative z-[2]">
        <div className="text-center  space-y-5  max-md:space-y-10">
          <h2 className="text-60  headingAnim text-primary-1">
            Core Open-Source Expertise 
          </h2>
         
        </div>
       
        
       <div className="marquee fadeup max-md:my-[7vw]">
          <div className="marquee__track opens-source max-md:space-x-[7vw] max-sm:space-x-[10vw]">
            {firstHalfAwards.map((item, index) => (
              <AwardItem
                key={index}
                img={item.img}
                
              />
            ))}
            {firstHalfAwards.map((item, index) => (
              <AwardItem
                key={index}
                img={item.img}
              />
            ))}
            </div>
          </div>

          <div className="marquee fadeup max-md:my-[7vw]">
          <div className="marquee__track_reverse opens-source max-md:space-x-[7vw] max-sm:space-x-[10vw]">
            {secondHalfAwards.map((item, index) => (
              <AwardItem
                key={index}
                img={item.img}
              />
            ))}
            {secondHalfAwards.map((item, index) => (
              <AwardItem
                key={index}
                img={item.img}
              />
            ))}
            </div>
          </div>
      
      </div>
    </section>
  );
};

export default Expertise;

const awards = [
  {
    img:"/assets/images/infosys-finacle/open-source/Apache_Tomcat_logo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/Apache-Flink-logo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/cordova-logo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/docker-logo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/elasticsearch-logo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/fluentbit-logo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/graylog-logo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/Haproxy-logo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/HDFS-logo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/iReport-logo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/Istio-bluelogo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/Jaeger-logo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/JBoss_logo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/jQuery-logo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/Kafka_logo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/kibana.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/Kubernetes_logo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/mongodb_logo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/nginx_logo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/nodejs_logo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/Postgresql_elephant.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/Python-logo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/rabbitmq-logo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/Red_Hat_logo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/Redis_logo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/Spinnaker-logo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/Spring_Boot.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/Spring-boot-logo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/Spring-Cloud-Stream-logo.png"
  },
  {
    img:"/assets/images/infosys-finacle/open-source/Zookeeper_logo.png"
  },

];
