import { Toast } from 'flowbite-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ToastProvider({errorMessage='', setCloseToast}) {
  return (
    <div className='fixed right-2 top-2 z-10'>
    <Toast className='bg-gray-200'>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-red-500" onClick={()=> setCloseToast(false)}>
            <FontAwesomeIcon icon={faXmark} />
        </div>
        <div className="ml-3 text-sm font-semibold">{errorMessage}</div>
    </Toast>
    </div>
  )
}
