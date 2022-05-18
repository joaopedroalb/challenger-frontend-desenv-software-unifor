import React, { ReactNode } from 'react'

type ModalProps = {
    children: ReactNode
    isActive:boolean
    handleCloseModal: ()=>void
}

export default function Modal({children,isActive,handleCloseModal}:ModalProps) {
  return (
    <>
        {isActive&&(
            <div className={`flex items-center justify-center overflow-y-auto overflow-x-hidden min-h-full
                            fixed top-0 right-0 left-0 z-50 w-full md:inset-0 bg-[#54545499]`}
                onClick={handleCloseModal}
            >
                <div onClick={(event)=>event.stopPropagation()} className={'p-4 bg-white'}>
                    {children}
                </div>
            </div>
        )}
    </>
  )
}
