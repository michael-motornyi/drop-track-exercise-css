import "./search.scss";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <div className="search">
      <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
      <input placeholder={`Search("/" for hotkey)`} />
    </div>
  );
};

export default Search;
