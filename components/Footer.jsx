import { AiFillCopyrightCircle } from 'react-icons/ai'
import { MdMail } from 'react-icons/md'
import { AiOutlineWhatsApp } from 'react-icons/ai'

const Footer = () => {
    return (
        <div id='intro' className="mt-4 mb-10 lg:mb-0">
            <div className="flex h-10 items-center justify-between text-xs font-normal text-LightGray py-4 px-2 md:px-4 w-full bg-MidNightBlack">
                <div className='flex items-center'>
                    <div className="mr-1 text-base">
                        <AiFillCopyrightCircle />
                    </div>
                    <span>Anish's Portfolio</span>
                </div>
                <div className="flex items-center">
                    <a href='https://www.linkedin.com/in/anish-sinha-248558220/' target="_blank" rel="noreferrer">Made with ❤️ by <span className='font-bold'>Anish</span></a>
                </div>
                <div className="hidden md:flex items-center">
                    <div className="mr-1 text-base">
                        <MdMail />
                    </div>
                    <div>anish763209@gmail.com</div>
                </div>
            </div>
        </div>
    )
}

export default Footer