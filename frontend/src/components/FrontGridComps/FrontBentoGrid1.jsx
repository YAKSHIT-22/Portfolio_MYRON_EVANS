import { useEffect } from 'react'

const FrontBentoGrid1 = () => {

  // useEffect(() => {
  //   for (var i = 1; i <= n; i++) {
  //     const AddBgAndBorder = document.getElementById(`div${i}`)
  //     AddBgAndBorder.style.backgroundImage = divData.imageUrl
  //     AddBgAndBorder.style.borderColor = divData.borderColor
  //   }
  // })


  var Row1 = [[1, 1], [1, 1], [1, 1]]
  return (
    <div className='my-10'>
      <div className='flex justify-center gap-4 '>
        {/* create a for loop */}
        {Row1.map((i, key) => (
          <div key={key} className='aspect-[9/8]  w-[8.5vw] bg-sm-primary  rounded-xl' id={`div${key + 1}`}></div>
        ))}

      </div>
      <div className='flex justify-center mt-4'>
        <div className='aspect-[7/5] w-[8.5vw] bg-sm-primary mr-4 rounded-xl' key={4} id="div4"></div>
        <div className='aspect-[7/5] w-[8.5vw] bg-sm-primary mr-4 rounded-xl' key={5} id="div5"></div>
        <div className=''>
          <div className='aspect-[29/32] w-[8.5vw] bg-sm-primary rounded-xl' key={6} id="div6"></div>
          <div className='aspect-[29/32] w-[8.5vw] bg-sm-primary rounded-xl mt-4' key={7} id="div7"></div>

        </div>




      </div>
      <div className='flex justify-center mt-4 items-center'>
        <div className='flex flex-col justify-center'>
          <div className=' w-[7.9vw] aspect-[31/29] bg-sm-primary  rounded-xl' key={8} id="div8"></div>
          <div className=' w-[7.9vw] bg-sm-primary aspect-[31/61] rounded-xl mt-4' key={9} id="div9"></div>

        </div>
        <div className='flex flex-col justify-center'>
          <div className=' w-[18.4vw] aspect-[169/140] bg-sm-primary pl-4 rounded-xl ml-5' key={10} id="div10"></div>
          <div className=' w-[18.4vw] aspect-[169/70] bg-sm-primary pl-3 rounded-xl ml-5 mt-4' key={11} id="div11"></div>
        </div>
      </div>
    </div>
  )
}

export default FrontBentoGrid1