import penEdit from '../../assets/svgs/editPen.svg';
import trash from '../../assets/svgs/trash.svg';

const Blog = () => {
    return (
        <div className='w-full my-4'>
            <div className='flex bg-secondary p-5 rounded-md'>
                <img className='size-40 aspect-square' />
                <div className='flex flex-col gap-5 px-4 my-auto'>
                    <span className='text-box-heading font-medium'>
                        Title Goes Here.
                    </span>
                    <p className=''>
                        Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim. Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.
                    </p>

                </div>
                <div className='flex justify-center gap-4 my-auto'>
                    <button className='bg-sm-primary rounded-md aspect-square size-10 p-2'>
                        <img src={penEdit} width={80} />
                    </button>
                    <button className='bg-sm-primary rounded-md aspect-square size-10 p-2'>
                        <img src={trash} width={80} />
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Blog