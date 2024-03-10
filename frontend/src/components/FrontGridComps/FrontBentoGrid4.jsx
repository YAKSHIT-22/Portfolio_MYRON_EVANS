import { useEffect } from 'react'

const FrontBentoGrid4 = () => {

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
        <div className='my-10'>
            <div className='flex justify-center mt-2'>
                <div>
                    <div className='flex '>
                        <div className=' aspect-[169/70] w-[19.5vw] bg-sm-primary mx-2 rounded-xl' key={1} id="div1"></div>
                        <div className=' w-[9.3vw] aspect-square bg-sm-primary mx-2 rounded-xl' key={2} id="div2"></div>
                    </div>
                    <div className='flex mt-4' >
                        <div>
                            <div className=' w-[9.3vw] aspect-[8/7] bg-sm-primary mx-2 rounded-xl' key={3} id="div3"></div>
                            <div className=' w-[9.3vw] aspect-[8/7] bg-sm-primary mx-2 rounded-xl mt-4' key={4} id="div4"></div>
                        </div>
                        <div className=' w-[19.5vw] aspect-[53/47] bg-sm-primary mx-2 rounded-xl' key={5} id="div5"></div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div className='flex flex-col justify-center mt-4'>
                <div className='flex justify-center'>
                    <div className='w-[29.5vw] aspect-[99/40] bg-sm-primary  rounded-xl' key={6} id="div6"></div>
                </div>
                <div className='flex justify-center'>
                    <div className=' w-[10.2vw] aspect-[9/6] bg-sm-primary  rounded-xl mt-4' key={7} id="div7"></div>
                    <div className=' w-[18.2vw] aspect-[27/8] bg-sm-primary pl-3 rounded-xl ml-4 mt-4' key={8} id="div8"></div>
                </div>
            </div>
        </div>
    )
}

export default FrontBentoGrid4