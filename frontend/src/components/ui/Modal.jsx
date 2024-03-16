import React from 'react'
import BoxIcon from '../Icons/BoxIcon'
import blockS from '../../assets/svgs/blockS.svg'
import ModalSwitchCase from '../AdminScreen/ModalSwitchCase'
const Modal = ({ open, onClose, children }) => {
    const dataJ = [
        {
            color: 'Red',
            colourCode: `#f9444g`

        },
        {
            color: 'blue',
            colourCode: `#de0a26`

        },
        {
            color: 'green',
            colourCode: `#f01e2c`
        },
    ]
    return (
        <div
            onClick={onClose}
            className={`fixed inset-0 flex justify-center items-center transition-colors
            ${open ? "visible bg-primary/95" : "invisible"}`}
        >

            {

                <section className='flex flex-col justify-center scale-50' >

                    <div className='bg-sm-primary w-full self-center flex flex-col rounded-[2rem] px-12 py-4 gap-y-10'>
                        <h2 className='text-content-heading'>Reading Instructions</h2>
                        <div className='space-x-3 gap-10'>
                            <h2 className='my-5'>Color Order</h2>
                            <div className='bg-primary rounded-[1.5rem]  justify-between p-2 flex px-9 py-5 '>
                                {dataJ.map((val, key) => (

                                    <div className='flex' key={key}>
                                        <h3 className='text-lg m-auto px-2'>1.{val.color}</h3>
                                        <BoxIcon hexi={val.colourCode} />
                                    </div>
                                ))}


                                {/* <div className='flex'>
            <h3 className='text-lg'>1.Red</h3>
            <img src={greenRect} alt='' />

          </div>
          <div className='flex'>
            <h3 className='text-lg'>1.Red</h3>
            <img src={blueRect} alt='' />

          </div> */}
                            </div>
                            <h2 className='mt-8'>Start Point</h2>

                            <div className='bg-primary rounded-[1.5rem] w-[100%] px-6 flex justify-center items-center py-4 my-5 '>
                                <h2 className='px-5'>Top Left</h2>
                                <img src={blockS} />
                            </div>



                        </div>
                    </div>
                    {/* get  api req from useEffect and set the FRONTGRIDNUMBER CORRECTLLY */}
                    <div className='Bento-blog-container mt-10'>
                        <ModalSwitchCase value={4} />

                    </div>
                </section>
            }
        </div>
    )
}

export default Modal