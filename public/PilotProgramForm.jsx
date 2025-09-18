"use client"
import React from 'react'
// import Copy from '../Animations/Copy'
// import PilotForm from '../PilotForm'
import Copy from '@/Components/Animations/Copy'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/Components/ui/form'
import { Input } from '@/Components/ui/input'
import { PhoneInput } from '@/Components/ui/phone-input'
import { Textarea } from '@/Components/ui/textarea'
import { Checkbox } from '@/Components/ui/checkbox'
import { Button } from '@/Components/ui/button'
// import PilotForm from '@/Components/PilotForm'
const PilotProgramForm = () => {
  return (
    <>
      <section className='w-screen h-full '>
        <div className='h-full w-full flex items-start justify-between  container max-md:flex-col max-sm:flex-col max-sm:gap-[15vw] max-md:gap-[10vw] max-sm:px-[5.5vw] max-md:px-[4vw]'>
          <div className='w-1/2 max-sm:w-full max-md:w-[100%] space-y-[1.5vw] max-md:space-y-[3vw] max-sm:space-y-[3vw]'>
           
              <h2 className='title-1 font-head text-white-200 headingAnim'>Get started with our Pilot Program  </h2>
           
            <div className='w-[68%] max-sm:w-[85%] max-md:w-[85%]'>
              <Copy>
                <p className='text-white-300 font-normal'>Fill out the form
                </p>
              </Copy>
            </div>
          </div>
          <div className='w-[47%] mt-[15vw] max-md:w-[100%] max-sm:w-full max-sm:mt-0'>
            {/* <PilotForm/> */}
          </div>
          <Form >
            <form
              autoComplete="off"
              className="space-y-[1vw] max-sm:space-y-[7vw] max-md:space-y-[4vw] tablet:space-y-[5vw]  mobile:pt-[5vw]"
            >
              {/* <FormField
                
                name="name"
                render={({ field }) => (
                  <FormItem>
                    
                    <FormControl>
                      <Input
                        placeholder="Name*"
                        autoComplete="off"
                        {...field}
                        className="placeholder:text-[1.15vw] pl-[2vw] bg-white/5 border !border-[#B0B0B080] rounded-full placeholder:text-[#CACACA] max-sm:placeholder:text-[3.5vw] max-sm:pl-[5vw]"
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              /> */}

              
            
            </form>
          </Form>
        </div>
      </section>
    </>
  )
}

export default PilotProgramForm

// import React from 'react'

// const PilotProgramForm = () => {
//   return (
//     <div>PilotProgramForm</div>
//   )
// }

// export default PilotProgramForm