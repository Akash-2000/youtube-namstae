import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appslice";
import { SEARCH_SUGGESTION_API } from "./utils/constant";
const Header = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const handleSidebar = () => {
    dispatch(toggleMenu());
  };

  //debouncing - a event handle based on the time
  useEffect(() => {
    let apiFetch;
    if (searchTerm != "") {
      apiFetch = setTimeout(FetchApi, 200);
    }
    return () => {
      clearTimeout(apiFetch);
    };
  }, [searchTerm]);

  const FetchApi = async () => {
    try {
      const response = await fetch(`${SEARCH_SUGGESTION_API}${searchTerm}`);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const xmlText = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, "application/xml");

      // Extract suggestions
      const suggestions = Array.from(
        xmlDoc.getElementsByTagName("suggestion")
      ).map((suggestion) => suggestion.getAttribute("data"));

      // Log suggestions to console
      console.log(suggestions);
      setSuggestions(suggestions);
      setShowSuggestions(true);
    } catch (error) {
      console.warn(error, "error while fetching suggestions");
    }
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <div onClick={handleSidebar}>
          <img
            alt="hamburger-menu"
            className="h-10"
            src="https://static.vecteezy.com/system/resources/previews/002/292/406/large_2x/hamburger-menu-line-icon-free-vector.jpg"
          />
        </div>
        <div>
          <img
            alt="youtube-logo"
            className="h-10 mx-2"
            src="https://tse1.mm.bing.net/th?id=OIP.sCtdNjphAin-gugu0MNptAHaEK&pid=Api&P=0&h=180"
          />
        </div>
      </div>
      <div className="col-span-10 text-center relative">
        <div>
          <input
            type="text"
            className="w-1/2 border border-gray-400 p-3 rounded-l-full"
            placeholder="search videos"
            onChange={(e) => setsearchTerm(e.target.value)}
            onBlur={() => setShowSuggestions(false)}
            value={searchTerm}
          />
          <button
            type="button"
            className="border border-gray-400 p-3 rounded-r-full border-l-0 px-5 bg-gray-300"
          >
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute left-1/3 transform -translate-x-64 bg-white border border-gray-300 rounded-lg shadow-lg w-1/2 h-96 overflow-y-auto scroll ml-36 mt-1">
            <ul className="text-left">
              {suggestions?.map((suggestion, index) => (
                <li
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  key={index}
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <div>
          <img
            alt="user-profile"
            className="h-9"
            src="https://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
