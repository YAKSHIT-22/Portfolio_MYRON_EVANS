import uploadIcon from '../../assets/icons/upload.svg'
const AddReviewForm = () => {
    return (
        <div>
            <div className="mx-8 my-12 bg-sm-primary rounded-xl flex flex-col gap-8 py-10 px-6">
                <div className="my-4  flex flex-col gap-4">
                    <h1 className="text-section-heading"> Add Reviews</h1>
                    <p className="text-base"> Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim. </p>
                </div>

                <div className=" mt-4">
                    <p className="text-base">Name of the Buyer</p>
                    <input
                        className="my-1 h-12 w-full rounded-md border-[1px]  border-[#D4D4D4]  bg-sm-primary px-2  outline-none focus:outline-none"
                        name="buyerName"
                        placeholder="Buyer Name"
                    />
                </div>
                <div className=" mt-4">
                    <p className="text-base">What People Say about me.</p>
                    <input
                        className="my-1 h-12 w-full rounded-md border-[1px]  border-[#D4D4D4]  bg-sm-primary px-2  outline-none focus:outline-none"
                        name="whatPeople"
                        placeholder="Write description here."
                    />
                </div>
                <div className="flex flex-row ">
                    <div className="mb-4 flex items-center pr-8">
                        <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="h-8 w-8 bg-gradient font-thin  text-[secondary] focus:accent-[#8d601d71]"
                        />
                        <label className="ms-2 text-base font-medium text-gray-900 dark:text-gray-300">
                            Default checkbox
                        </label>
                    </div>

                    <div className="mb-4 flex items-center">
                        <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="primary h-8 w-8 rounded border-gray-300 bg-gray-100 px-3 font-thin focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                        />
                        <label className="ms-2 text-base font-medium text-gray-900 dark:text-gray-300">
                            {' '}
                            checkbox
                        </label>
                    </div>

                </div>
                <div className="flex flex-col pt-10">
                    <div className="text-base"> Upload Image of Buyer</div>
                    <div className="mt-4 flex h-[17rem] cursor-pointer items-center justify-center rounded-xl border border-white bg-[#3F3F3F]">
                        <img src={uploadIcon} />
                    </div>
                </div>

                <div className="flex justify-center">
                    <button className="mt-10">
                        <div className=" w-64 rounded-md bg-gradient px-3 py-3 text-center font-rubik font-medium">
                            Submit
                        </div>
                    </button>
                </div>


            </div>
        </div>
    )
}

export default AddReviewForm