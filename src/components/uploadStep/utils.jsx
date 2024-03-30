
const FileCardPreview = ({ id, urlImage, alt, title, date, sizeFile, handleRemoveOne, isCapa }) => {

  const handleDragCardStart = (ev) => {
    ev.dataTransfer.setData("idSelect", id)
  }

  const handleDragCardOver = (ev) => {
    ev.preventDefault()
  }

  const handleDragCardEnd = (ev) => {
  }


  return (
    <div
      id={id}
      className={`file-page ${isCapa === true ? "isThumb" : null} `}
      draggable
      onDragStart={handleDragCardStart}
      onDragOver={handleDragCardOver}
      onDragEnd={handleDragCardEnd}
    >
      <img src={urlImage} alt={alt} width={50} draggable={false} />
      <div className='content-page'>
        <h3>{title}</h3>
        <time>{date} - {sizeFile}Mb</time>
      </div>
      <button type='button' onClick={() => { handleRemoveOne(id) }}>Remover</button>
    </div>
  )
}

const randomId = () => {
  return (Math.random()).toString(36).substring(2) + Date.now().toString(36);
}

const createObjectPreview = (id, name, date, size, url, file) => {
  return {
    id: id,
    date: date.toDateString(),
    name: name,
    size: ((size / 1024) / 1024).toFixed(2),
    url: url,
    file: file
  }

}

export { randomId, createObjectPreview, FileCardPreview }