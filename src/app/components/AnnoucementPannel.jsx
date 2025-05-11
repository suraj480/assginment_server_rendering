export default function AnnouncementPanel({ announcements }) {
  return (
    <div>
      {" "}
      <h1>CSR:- client side rendering</h1> <h3>Live Announcements</h3>{" "}
      <ul className="list-group">
        {" "}
        {announcements.map((a) => (
          <li key={a.id} className="list-group-item">
            {" "}
            {a.message}{" "}
          </li>
        ))}{" "}
      </ul>
       
    </div>
  );
}
