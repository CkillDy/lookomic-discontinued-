const MangaCard = ({ id, title, urlImg, isComplete, userName, categorys = [], alt }) => {

  return (
    <figure
      id={id}
      key={id}
      isComplete={isComplete}
      className="containerMangaCard"
    >
      {isComplete && isComplete === true ? <span>Completo</span> : <span>Lançamento</span>}
      <img src={urlImg} alt={alt} draggable="false" />
      <legend>
        <h3 title="Clique para iniciar a leitura ;)">{title}</h3>
        <p>{userName} - {categorys.reduce((t, p) => t + " " + p)} </p>
      </legend>
    </figure>
  )
}


export default MangaCard