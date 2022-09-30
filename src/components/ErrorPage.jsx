const ErrorPage = ({message}) => {
    const errorInfo = message.err.response.data.msg;
    return <h3>{errorInfo}! 🙉</h3>;
}

export default ErrorPage;