import Image from 'next/image'
import React from 'react'


const SecurityCard = ({ img, text }) => {
    return (
        <>
            <div className=' w-full'>
                <div className='flex items-center gap-10 pb-15 '>
                    <div className='w-1/2'>
                        <Image src={img} height={178} width={178} alt='securtity-1' className='w-[10vw] h-[10vw] object-contain fadein' />
                    </div>
                    <div className='w-[98vw]'>
                        <p data-para-anim className='text-[1.145vw] text-[#CACACA] content-p'>{text}</p>
                    </div>
                </div>
                <span className='w-full h-[1px] bg-white/20 block lineDraw' />
            </div>
        </>
    )
}

const Security = () => {
    return (
        <section className='h-full w-screen py-20'>
            <div className='py-10 px-15 w-full space-y-16 '>
                <div className='w-[50%]'>
                    <h2 className='text-[5.2vw] font-head leading-[1.2] headingAnim text-[#E8E8E8]'>Security Standards and Compliance</h2>
                </div>
                <div className='w-full flex items-end justify-end  gap-10 py-10'>
                    <div className='space-y-20 relative w-[60%] '>
                        <SecurityCard img={"/assets/images/security-1.png"} text={"SOC 2 (System and Organization Controls 2) is a security compliance framework developed by the American Institute of Certified Public Accountants (AICPA). It ensures that cloud-based and enterprise AI solutions maintain the highest standards of data security, integrity, and privacy."} />
                        <SecurityCard img={"/assets/images/security-2.png"} text={"ISO 27001 is a globally recognized information security standard that defines the best practices for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS). It ensures that businesses manage data security risks effectively, protecting sensitive information from breaches, cyber threats, and unauthorized access."} />
                        <SecurityCard img={"/assets/images/security-3.png"} text={"UnifyAI meets HIPAA (Health Insurance Portability and Accountability Act) compliance, ensuring the secure processing of patient and insurance-related data. This is essential for businesses in healthcare, insurance, and life sciences that rely on AI for decision-making."} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Security