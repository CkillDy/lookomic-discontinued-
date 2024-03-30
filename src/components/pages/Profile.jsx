import React from 'react';

const Profile = () => {
  return (
    <div className="profile-container">
      <header className="profile-header">
        <img
          className="profile-avatar"
          src="caminho/para/uma/imagem.jpg"
          alt="Foto de Perfil"
        />
        <div className="profile-info">
          <h1 className="profile-username">Nome do Usuário</h1>
          <p className="profile-bio">Descrição breve sobre o usuário...</p>
          <div className="profile-stats">
            <span>Seguidores: 1000</span>
            <span>Seguindo: 200</span>
            <span>Mangás Publicados: 50</span>
          </div>
        </div>
      </header>

      <section className="profile-actions">
        <button className="follow-button">Seguir</button>
        <button className="message-button">Mensagem</button>
      </section>

      <section className="profile-tabs">
        <button className="active">Publicações</button>
        <button>Lidos</button>
        <button>Favoritos</button>
      </section>

      <section className="profile-content">
        {/* Área para mostrar os mangás publicados, lidos, favoritos, etc. */}
        {/* Exemplos: */}
        <div className="manga-item">
          <img src="caminho/para/manga1.jpg" alt="Manga 1" />
          <p>Título do Manga 1</p>
        </div>

        <div className="manga-item">
          <img src="caminho/para/manga2.jpg" alt="Manga 2" />
          <p>Título do Manga 2</p>
        </div>
        {/* Adicione mais itens conforme necessário */}
      </section>

      <section className="profile-feed">
        {/* Feed de Atividades */}
        <div className="activity-item">
          <p>Nome do Usuário publicou um novo capítulo de [Título do Manga].</p>
          <span>Há 2 horas</span>
        </div>
        {/* Adicione mais itens conforme necessário */}
      </section>

      <section className="profile-favorites">
        {/* Lista de Favoritos */}
        <h2>Mangás Favoritos</h2>
        <div className="favorite-item">
          <img src="caminho/para/manga1.jpg" alt="Manga 1" />
          <p>Título do Manga 1</p>
        </div>
        {/* Adicione mais itens conforme necessário */}
      </section>

      <section className="profile-settings">
        {/* Configurações do Perfil */}
        <h2>Configurações do Perfil</h2>
        <form>
          <label htmlFor="username">Nome de Usuário:</label>
          <input type="text" id="username" />

          <label htmlFor="bio">Biografia:</label>
          <textarea id="bio"></textarea>

          <label htmlFor="password">Nova Senha:</label>
          <input type="password" id="password" />

          {/* Adicione mais campos conforme necessário */}

          <button type="submit">Salvar Alterações</button>
        </form>
      </section>
    </div>
  );
}

export default Profile;
