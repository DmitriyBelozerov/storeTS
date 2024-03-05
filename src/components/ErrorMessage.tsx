

interface ErrorMessageProps {
    error: string
}

export function ErrorMessage({error}: ErrorMessageProps) {
    return (
        <h2 style={{position: "absolute", color: "red", top: '80%', left: '50%' }}>{error}</h2>
    )
}