import React from 'react'
import Image from 'next/image'
import danger from "@/../public/icons/danger.svg"
import x from '@/../public/icons/x.svg'
import { deleteAccount, deleteAssessment, deleteComment } from '@/utils/api'
import { useRouter } from 'next/navigation'
import { removeCookie } from '@/utils/cookies'

type Props = {
    closeConfirmation: () => void;
    isAComment?: boolean;
    isAAssessment?: boolean;
    isTheAccount?: boolean;
    id: number;
}

const ConfirmDelete = ({closeConfirmation, isAAssessment, isAComment, isTheAccount, id} : Props) => {

    const router = useRouter()

    const handleDelete = async () => {
        if (isAComment) {
            await deleteComment(id)
            location.reload()
        } else if (isTheAccount) {
            await deleteAccount(id);
            removeCookie()
            router.refresh()
        } else if (isAAssessment) {
            await deleteAssessment(id)
            location.reload()
        }
        closeConfirmation()
    }

  return (
    <>
        <div className='fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/50 z-[1] flex-col'>
            <div onClick={closeConfirmation} className='absolute h-10 w-10 right-10 top-10 sm:hidden'>
                <Image
                src={x}
                alt='x-icon'
                fill
                sizes='max'
                />
            </div>
            <div className='w-full h-full bg-extra flex flex-col gap-10 justify-center items-center sm:rounded-2xl sm:h-1/2 sm:w-1/2 md:w-1/3'>
                <div className='flex justify-center items-center gap-2'>
                    <h1 className='text-3xl font-semibold'>Atenção</h1>
                    <div className='relative h-16 w-16'>
                        <Image
                        src={danger}
                        alt='danger-icon'
                        fill
                        sizes='max'
                        />
                    </div>
                </div>
                <div>
                    <p className='text-xl text-center'>Após a confirmação, a ação será irreversível.</p>
                </div>
                <div className='flex justify-center gap-5'>
                    <button onClick={closeConfirmation} className='py-2 px-5 h-fit w-fit bg-red-800 text-white text-sm rounded-2xl'>
                        Cancelar
                    </button>
                    <button onClick={handleDelete} className='py-2 px-5 h-fit w-fit bg-primary text-white text-sm rounded-2xl'>
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ConfirmDelete;