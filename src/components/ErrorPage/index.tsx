export default function ErrorPage({
  statusText,
  message,
}: {
  statusText?: string;
  message?: string;
}) {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{statusText || message || "Error message is unknown."}</i>
      </p>
    </div>
  );
}
