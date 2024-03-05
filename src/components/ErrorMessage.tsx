

interface ErrorMessageProps {
    error: string
}

export function ErrorMessage({error}: ErrorMessageProps) {
    return (
        <h2 style={{position: "absolute", color: "red", top: '50%', left: '50%'}}>{error}. Попробуйте перезагрузить страницу позднее</h2>
    )
}