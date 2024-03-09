import { useEffect } from 'react'

const BentoGrid2 = () => {
    // useEffect(() => {
    //     for (var i = 1; i <= n; i++) {
    //         const AddBgAndBorder = document.getElementById(`div${i}`)
    //         AddBgAndBorder.style.backgroundImage = divData.imageUrl
    //         AddBgAndBorder.style.borderColor = divData.borderColor
    //     }
    // })

    return (
        <div>
            <div className='flex justify-center mt-2'>
                <div>
                    <div className='aspect-[169/70] w-[11.8vw] bg-sm-primary mx-2 rounded-xl' key={1} id="div1"></div>
                    <div className='aspect-[169/140] w-[11.8vw] bg-sm-primary mx-2 rounded-xl mt-4' key={2} id="div2"></div>
                </div>

                <div>
                    <div className='aspect-[15/27] w-[5.1vw] bg-sm-primary mx-2 rounded-xl' key={3} id="div3"></div>
                    <div className='aspect-[73/80] w-[5.1vw] bg-sm-primary mx-2 rounded-xl mt-4' key={4} id="div4"></div>

                </div>




            </div>
            <div className='flex justify-center mt-4'>
                <div>
                    <div className='aspect-[31/28] w-[5.9vw] bg-sm-primary  rounded-xl' key={5} id="div5"></div>
                    <div className='aspect-[31/56] w-[5.9vw] bg-sm-primary  rounded-xl mt-4' key={6} id="div6"></div>

                </div>
                <div>
                    <div className='aspect-[67/35] w-[10.8vw] bg-sm-primary pl-4 rounded-xl ml-4' key={7} id="div7"></div>
                    <div className='aspect-[70/67] w-[10.8vw] bg-sm-primary pl-3 rounded-xl ml-4 mt-4' key={8} id="div8"></div>
                </div>
            </div>
        </div>
    )
}

export default BentoGrid2