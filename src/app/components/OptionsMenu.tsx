import React, { Dispatch, SetStateAction } from 'react'

type Props = {
    options: Teacher[] | Discipline[]
    setItem: Dispatch<SetStateAction<string>>;
    onClick: () => void;
}

const OptionsMenu = ({options, setItem, onClick}: Props) => {

    const handleClick = (name:string) => {
        setItem(name)
        onClick()
    }
    
  return (
    <div className='flex flex-col max-h-12 w-4/5 bg-white justify-center items-center z-[2] overflow-y-auto transition-all ease-in-out duration-1000 rounded-b-sm [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
        {options.map(option => {
            return (
                <div key={option.id} onClick={()=> handleClick(option.name)} className='text-xs text-black text-center w-full px-2 border-b-[1px] border-b-black py-1 cursor-pointer'>
                    {option.name}
                </div>
            )
        })}
    </div>
  )
}

export default OptionsMenu;