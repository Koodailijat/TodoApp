import { useRouteError } from 'react-router-dom';

export function ErrorPage() {
    const error = useRouteError() as { message: string; statusText: string };

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            {error.message && error.statusText && (
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            )}
        </div>
    );
}
