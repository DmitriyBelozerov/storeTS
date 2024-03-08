

interface ErrorMessageProps {
    error: string
}

export function ErrorMessage({ error }: ErrorMessageProps) {
    return (
        <span style={{ color: "red", margin: "4px" }}>{error}</span>
    )
}