import { useEffect } from 'react'

const FrontBentoGrid2 = () => {
    // useEffect(() => {
    //     for (var i = 1; i <= n; i++) {
    //         const AddBgAndBorder = document.getElementById(`div${i}`)
    //         AddBgAndBorder.style.backgroundImage = divData.imageUrl
    //         AddBgAndBorder.style.borderColor = divData.borderColor
    //     }
    // })

    return (
        <div className='my-10'>
            <div className='flex justify-center mt-2'>
                <div>
                    <div className='aspect-[169/70] w-[19.5vw] bg-sm-primary mx-2 rounded-xl' key={1} id="div1"></div>
                    <div className='aspect-[169/140] w-[19.5vw] bg-sm-primary mx-2 rounded-xl mt-4' key={2} id="div2"></div>
                </div>

                <div>
                    <div className='aspect-[15/27] w-[8.3vw] bg-sm-primary mx-2 rounded-xl' key={3} id="div3"></div>
                    <div className='aspect-[73/80] w-[8.3vw] bg-sm-primary mx-2 rounded-xl mt-4' key={4} id="div4"></div>

                </div>




            </div>
            <div className='flex justify-center mt-4'>
                <div>
                    <div className='aspect-[31/28] w-[9.8vw] bg-sm-primary  rounded-xl' key={5} id="div5"></div>
                    <div className='aspect-[31/54] w-[9.8vw] bg-sm-primary  rounded-xl mt-4' key={6} id="div6"></div>

                </div>
                <div>
                    <div className='aspect-[67/33] w-[17.8vw] bg-sm-primary pl-4 rounded-xl ml-4' key={7} id="div7"></div>
                    <div className='aspect-[70/67] w-[17.8vw] bg-sm-primary pl-3 rounded-xl ml-4 mt-4' key={8} id="div8"></div>
                </div>
            </div>
        </div>
    )
}

export default FrontBentoGrid2