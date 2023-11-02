'use client'

export default function Modal({ children }: { children: React.ReactNode }) {

    return (

            <dialog
            >
                {children}
            </dialog>

    )
}
