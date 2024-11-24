import { useEffect, useRef, useState } from "react"


const FlashSalesCount = () => {
    const [salesDays, setSalesDays]= useState("00");
    const [salesHour, setSalesHour]= useState("00");
    const [salesMinutes, setSalesMinutes]= useState("00");
    const [salesSeconds, setSalesSeconds]= useState("00");

    let interval = useRef(); 

    const startTimer = ()=>{
        const salesEndDate = new Date('2024-12-13T00:00:00').getTime();
        interval =setInterval(()=>{

            const now= new Date().getTime();
            const distance= salesEndDate - now;


            const days = Math.floor((distance/(1000*60*60*24)));
            const hours = Math.floor((distance%(1000*60*60*24)/(1000*60*60)));
            const minutes = Math.floor((distance%(1000*60*60)/(1000*60)));
            const seconds = Math.floor((distance%(1000*60)/(1000)));


            if(distance < 0){
                // clear Timer

                clearInterval(interval.current)
            }else{
                // update Timer
                setSalesDays(days);
                setSalesHour(hours);
                setSalesMinutes(minutes);
                setSalesSeconds(seconds)
            }
        }, 1000)

        
        
         
    }
    useEffect(() => {
        startTimer()
        return() =>{
            clearInterval(interval.current)
        }
    })



  return (
    <div className="font-Poppins flex">
        <div className="flex items-center">
            <div>
            <p className="text-[12px] font-medium">Days</p>
            <p className="text-[32px] font-bold">{salesDays}</p>
            </div>
            <span className="text-[#E07575] mt-3 text-[32px] mr-2 ml-2">:</span>
        </div>
        <div className="flex items-center">
            <div>
            <p className="text-[12px] font-medium">Hours</p>
            <p className="text-[32px] font-bold">{salesHour}</p>
            </div>
            <span className="text-[#E07575] mt-3 text-[32px] mr-2 ml-2">:</span>
        </div>
        <div className="flex items-center">
            <div>
            <p className="text-[12px] font-medium">Minutes</p>
            <p className="text-[32px] font-bold">{salesMinutes}</p>
            </div>
            <span className="text-[#E07575] mt-3 text-[32px] mr-2 ml-2">:</span>
        </div>
        <div className="flex items-center">
            <div>
            <p className="text-[12px] font-medium">Seconds</p>
            <p className="text-[32px] font-bold">{salesSeconds}</p>
            </div>
        </div>
    </div>
  )
}

export default FlashSalesCount