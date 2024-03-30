import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("all");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputSearch = (ev) => {
    setQuery(ev.target.value);
  };

  const handleSearchTypeChange = (ev) => {
    setSearchType(ev.target.value);
  };

  const handleSearch = () => {
    // Lógica de pesquisa aqui (exemplo com resultados fictícios).
    const results = [
      { id: 1, title: "Manga 1", author: "Autor 1", genre: "Ação" },
      { id: 2, title: "Manga 2", author: "Autor 2", genre: "Comédia" },
      // Adicione mais resultados conforme necessário.
    ];

    setSearchResults(results);
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
        <input
          type="text"
          placeholder="Buscar..."
          value={query}
          onChange={handleInputSearch}
        />
        <select value={searchType} onChange={handleSearchTypeChange}>
          <option value="all">Todos</option>
          <option value="user">Usuários</option>
          <option value="title">Título</option>
          <option value="genre">Gênero</option>
          {/* Adicione mais opções conforme necessário */}
        </select>
        <button type="submit">Pesquisar</button>
      </form>

      <div className="search-results">
        {searchResults.length > 0 ? (
          <ul className="results-list">
            {searchResults.map((result) => (
              <li key={result.id} className="result-item">
                <strong>Título:</strong> {result.title}
                <br />
                <strong>Autor:</strong> {result.author}
                <br />
                <strong>Gênero:</strong> {result.genre}
                {/* Adicione mais informações conforme necessário */}
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
