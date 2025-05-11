export default function BlogPostCard({ title, snippet }) {
  return (
    <div className="card mb-3">
      {" "}
      <div className="card-body">
        {" "}
        <h5 className="card-title">{title}</h5>{" "}
        <p className="card-text">{snippet}</p>{" "}
      </div>
       
    </div>
  );
}
