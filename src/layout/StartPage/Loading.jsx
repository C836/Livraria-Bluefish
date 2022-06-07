import { useContext} from "react";
import { LoadContext } from "../../App";
import "./startPage.css";

export default function StartPage() {
  const loaded = useContext(LoadContext)

  return (
    <div className={`StartPage ${loaded && "disabled"}`}>
      <div className="bookshelf_wrapper">
        <ul className="books_list">
          <li className="book_item first"></li>
          <li className="book_item second"></li>
          <li className="book_item third"></li>
          <li className="book_item fourth"></li>
          <li className="book_item fifth"></li>
          <li className="book_item sixth"></li>
        </ul>
        <div className="shelf"></div>
      </div>
    </div>
  );
}
