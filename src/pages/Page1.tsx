export const Page1 = () => {
    const env = process.env.NODE_ENV;

    return (
        <div>
            <p>Environment: {env}</p>
            
            <h1>This is Page 1</h1>
        </div>
    )
}