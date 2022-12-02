import { addBooks } from "./BooksSlice";
const { useState } = require("react");
const { useDispatch } = require("react-redux");
const { useNavigate, useLocation } = require("react-router-dom");

const UpdateBook = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);
  const [id] = useState(location.state.id);
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id, title, author };
    dispatch(addBooks(book));
    navigate("/show-books", { replace: true });
  };
  return (
    <div>
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBook;
