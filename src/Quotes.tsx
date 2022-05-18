import axios from "axios";
import { useEffect, useState } from "react";

interface QuotesComplete {
  text: string;
  author: string;
}

function getAllQuotes() {
  return axios
    .get<QuotesComplete>(
      "https://grandcircusco.github.io/demo-apis/quotes.json"
    )
    .then((response) => response.data);
}

export function Quotes() {
  const [quotes, setQuotes] = useState<QuotesComplete[]>([]);

  useEffect(() => {
    getAllQuotes().then((data: any) => setQuotes(data));
  }, []);

  return (
    <div>
      <ol>
        {quotes.map((person) => (
          <li>
            {person.text} {person.author}
          </li>
        ))}
      </ol>
    </div>
  );
}
