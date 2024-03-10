import { useEffect } from 'react'

const BentoGrid1 = () => {

  // useEffect(() => {
  //   for (var i = 1; i <= n; i++) {
  //     const AddBgAndBorder = document.getElementById(`div${i}`)
  //     AddBgAndBorder.style.backgroundImage = divData.imageUrl
  //     AddBgAndBorder.style.borderColor = divData.borderColor
  //   }
  // })


  var Row1 = [[1, 1], [1, 1], [1, 1]]
  return (
    <div>
      <div className='flex justify-center gap-4'>
        {/* create a for loop */}
        {Row1.map((i, key) => (
          <div key={key} className='aspect-[9/8]  w-[5.3vw] bg-sm-primary  rounded-xl' id={`div${key + 1}`}></div>
        ))}

      </div>
      <div className='flex justify-center mt-4'>
        <div className='aspect-[7/4] w-[5.3vw] bg-sm-primary mr-4 rounded-xl' key={4} id="div4"></div>
        <div className='aspect-[7/4] w-[5.3vw] bg-sm-primary mr-4 rounded-xl' key={5} id="div5"></div>
        <div className=''>
          <div className='aspect-[27/32] w-[5.3vw] bg-sm-primary rounded-xl' key={6} id="div6"></div>
          <div className='aspect-[27/32] w-[5.3vw] bg-sm-primary rounded-xl mt-4' key={7} id="div7"></div>

        </div>




      </div>
      <div className='flex justify-center mt-4 items-center'>
        <div className='flex flex-col justify-center'>
          <div className=' w-[5.1vw] aspect-[31/28] bg-sm-primary  rounded-xl' key={8} id="div8"></div>
          <div className=' w-[5.1vw] bg-sm-primary aspect-[31/61] rounded-xl mt-4' key={9} id="div9"></div>

        </div>
        <div className='flex flex-col justify-center'>
          <div className=' w-[11.8vw] aspect-[169/140] bg-sm-primary pl-4 rounded-xl ml-5' key={10} id="div10"></div>
          <div className=' w-[11.8vw] aspect-[169/70] bg-sm-primary pl-3 rounded-xl ml-5 mt-4' key={11} id="div11"></div>
        </div>
      </div>
    </div>
  )
}

export default BentoGrid1