import { useEffect } from 'react'

const BentoGrid4 = () => {

    // var bg_data_and_title = [
    //     {
    //         id: 1,
    //         title: "First Title",
    //         desc: "First Description",
    //         imgaeUrl: "",
    //         borderColor: "",  
    //     }
    // ]
    // useEffect(() => {
    //     for(var i = 1 ; i <= n ; i++){
    //         const AddBgAndBorder = document.getElementById(`div${i}`)
    //         AddBgAndBorder.style.backgroundImage = divData.imageUrl
    //         AddBgAndBorder.style.borderColor = divData.borderColor
    //     }
    // })



    return (
        <div>
            <div className='flex justify-center mt-2' 
                aria-label="4"
            >
                <div>
                    <div className='flex '
                        aria-label="4"
                    >
                        <div className=' aspect-[169/70] w-[12.2vw] bg-sm-primary mx-2 rounded-xl' key={1} id="div1"
                            aria-label="4"
                        ></div>
                        <div className=' w-[6vw] aspect-square bg-sm-primary mx-2 rounded-xl' key={2} id="div2"
                            aria-label="4"
                        ></div>
                    </div>
                    <div className='flex mt-4'
                        aria-label="4"
                     >
                        <div
                            aria-label="4"
                        >
                            <div className=' w-[6vw] aspect-[8/7] bg-sm-primary mx-2 rounded-xl' key={3} id="div3"
                                aria-label="4"
                            ></div>
                            <div className=' w-[6vw] aspect-[8/7] bg-sm-primary mx-2 rounded-xl mt-4' key={4} id="div4"
                                aria-label="4"
                            ></div>
                        </div>
                        <div className=' w-[12.2vw] aspect-[53/50] bg-sm-primary mx-2 rounded-xl' key={5} id="div5"
                            aria-label="4"
                        ></div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div className='flex flex-col justify-center mt-4'
                aria-label="4"
            >
                <div className='flex justify-center'
                    aria-label="4"
                >
                    <div className='w-[18.6vw] aspect-[99/40] bg-sm-primary  rounded-xl' key={6} id="div6"
                        aria-label="4"
                    ></div>
                </div>
                <div className='flex justify-center'>
                    <div className=' w-[7.8vw] aspect-[10/7] bg-sm-primary  rounded-xl mt-4' key={7} id="div7"
                        aria-label="4"
                    ></div>
                    <div className=' w-[10.2vw] aspect-[27/14] bg-sm-primary pl-3 rounded-xl ml-4 mt-4' key={8} id="div8"
                        aria-label="4"
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default BentoGrid4