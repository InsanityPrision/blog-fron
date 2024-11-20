import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found">
      <h2 className="main-heading">Page not found (404)</h2>
      <img
        src="/images/404.webp"
        alt="Page not found"
        width={300}
        height={300}
      />
    </div>
  );
};

export default NotFoundPage;
