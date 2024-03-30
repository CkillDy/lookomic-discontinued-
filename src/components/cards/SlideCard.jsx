const SlideCard = ({ imageUrl, title, description, button = {
  redirectPath: "",
  textContent: "",
  onClick: (ev) => { },
  style: {}
} }) => {
  return (
    <figure className="figureSlideContainer">
      <img src={imageUrl} alt="Imagem do anime naruto" width={200} draggable="false" />
      <legend>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
        {
          button ?
            <a href={button.redirectPath} >
              <button
                type="button"
                onClick={button.onClick}
                style={button.style}>
                {button.textContent}</button>
            </a>
            : null}
      </legend>
    </figure>
  )
}

export default SlideCard