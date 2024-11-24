import { useEffect, useRef, useState } from "react"


const CatCount = () => {
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
    <div className="font-Poppins flex space-x-3 text-black">
        <div className="flex justify-items-center mb-2">
            <div className="block bg-white rounded-full p-2">
            <p className="text-[12px] font-bold flex justify-center">{salesDays}</p>
            <p className="text-[12px] font-medium flex justify-center">Days</p>
            </div>
        </div>
        <div className="flex justify-items-center mb-2">
            <div className="block bg-white rounded-full p-2">
            <p className="text-[12px] font-bold flex justify-center">{salesHour}</p>
            <p className="text-[12px] font-medium flex justify-center">Hours</p>
            </div>
        </div>
        <div className="flex justify-items-center mb-2">
            <div className="block bg-white rounded-full p-2">           
            <p className="text-[12px] font-bold flex justify-center">{salesMinutes}</p>
            <p className="text-[12px] font-medium flex justify-center">Minutes</p>
            </div>
        </div>
        <div className="flex justify-items-center mb-2">
            <div className="block bg-white rounded-full p-2">
            <p className="text-[12px] font-bold flex justify-center">{salesSeconds}</p>
            <p className="text-[12px] font-medium flex justify-center">Seconds</p>
            </div>
        </div>
    </div>
  )
}

export default CatCount