export const Page2 = () => {
    const env = process.env.NODE_ENV;

    return (
        <div>
            <p>Environment: {env}</p>
            
            <h1>This is Page 2</h1>
        </div>
    )
}