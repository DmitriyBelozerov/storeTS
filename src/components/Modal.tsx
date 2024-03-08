interface ModalProps {
    children: React.ReactNode
    title: string
    onClose: ()=>void
}

export function Modal({children, title, onClose}: ModalProps) {
    return (
        <>
            <div className="modal__back" onClick={onClose}>
            </div>
            <div className="modal__window">
                <h1>{title}</h1>
                {children}
            </div>
        </>
    )
}