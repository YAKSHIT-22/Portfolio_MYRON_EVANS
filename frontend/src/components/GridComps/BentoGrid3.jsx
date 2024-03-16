

const BentoGrid3 = () => {

    // useEffect(() => {
    //     for (var i = 1; i <= n; i++) {
    //         const AddBgAndBorder = document.getElementById(`div${i}`)
    //         AddBgAndBorder.style.backgroundImage = divData.imageUrl
    //         AddBgAndBorder.style.borderColor = divData.borderColor
    //     }
    // })


    return (
        <div>
            <div className='flex justify-center mt-2'
                aria-label="3">
                <div
                    aria-label="3">
                    <div className='flex '
                        aria-label="3">
                        <div className='aspect-[137/56] w-[10.9vw] bg-sm-primary mx-2 rounded-xl' key={1} id="div1"
                            aria-label="3"></div>
                        <div className='aspect-square w-[5.3vw] bg-sm-primary mx-2 rounded-xl' key={2} id="div2"
                            aria-label="3"></div>
                    </div>
                    <div className='aspect-[249/140] w-[17vw] bg-sm-primary mx-2 rounded-xl mt-4' key={3} id="div3" aria-label="3"></div>
                </div>
                <div>
                </div>
            </div>
            <div className='flex flex-col justify-center mt-4' aria-label="3">
                <div className='flex justify-center' aria-label="3">
                    <div className='aspect-[3/4] w-[6.5vw] bg-sm-primary  rounded-xl' key={4} id="div4" aria-label="3"></div>
                    <div className='aspect-[13/14] w-[9.5vw] bg-sm-primary pl-4 rounded-xl ml-4' key={5} id="div5" aria-label="3"></div>

                </div>
                <div className='flex justify-center' aria-label="3">
                    <div className='aspect-[12/7] w-[10vw] bg-sm-primary  rounded-xl mt-4' key={6} id="div6" aria-label="3"></div>
                    <div className='aspect-[24/11] w-[5.5vw] bg-sm-primary pl-3 rounded-xl ml-4 mt-4' key={7} id="div7" aria-label="3"  ></div>
                </div>
            </div>
        </div>
    )
}

export default BentoGrid3