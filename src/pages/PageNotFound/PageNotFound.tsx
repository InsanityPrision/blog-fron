import "./PageNotFound.css";

const PageNotFound: React.FC = () => {
  return (
    <div className="not-found">
      <h2 className="main-heading">Page not found (404)</h2>
      <img
        src="/public/images/404.webp"
        alt="Page not found"
        width={300}
        height={300}
      />
    </div>
  );
};

export default PageNotFound;
