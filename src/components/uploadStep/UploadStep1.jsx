import { useEffect, useState } from "react";
import { createObjectPreview, FileCardPreview, randomId } from "./utils";


function UploadFileStep1({ setImages, images }) {

  const typeFormat = ["image/jpeg", "image/png", "image/jpg"]

  const handleDrop = (ev) => {
    ev.preventDefault();
  };

  const handleDragOver = (ev) => {
    ev.preventDefault();
  };

  useEffect(() => {

    document.body.addEventListener("drop", handleDrop)
    document.body.addEventListener("dragover", handleDragOver)

    return () => {
      document.body.removeEventListener("drop", handleDrop)
      document.body.removeEventListener("dragover", handleDragOver)
    }

  }, [])

  const drop = {
    handleOverZone: async function (ev) {
      ev.currentTarget.classList.add("dragOpacity")
      ev.preventDefault()
    },
    handleLeaveZone: async function (ev) {
      ev.preventDefault()
    },

    handleDropzone: async function (ev) {
      ev.preventDefault()
      ev.currentTarget.classList.remove("dragOpacity")
      const files = ev.dataTransfer.files

      let tempImages = []

      if (!files) return
      for (let file of files) {
        const tamanhoLimiteBytes = 1.5 * 1024 * 1024;
        if (file.size > tamanhoLimiteBytes) {

          throw new Error('O tamanho do arquivo excede o limite de 1.5 megabytes.');
        }

        if (typeFormat.includes(file.type) === false) return
        const dateFormat = new Date(file.lastModified)
        const bufferImg = await file.arrayBuffer()
        const urlPreview = URL.createObjectURL(new Blob([bufferImg]))

        const imageInfo = createObjectPreview(
          randomId(),
          file.name,
          dateFormat,
          file.size,
          urlPreview,
          file
        )

        tempImages = [imageInfo, ...tempImages]
      }
      setImages((imgpPrev) => [...tempImages, ...imgpPrev])

    },
  }

  const handleSelectFile = async (ev) => {
    ev.preventDefault()
    const files = ev.target.files

    let tempImages = []

    if (!files) return
    for (let file of files) {

      if (typeFormat.includes(file.type) === false) return
      const bufferImg = await file.arrayBuffer()
      const urlPreview = URL.createObjectURL(new Blob([bufferImg]))
      const dateFormat = new Date(file.lastModified)

      const imageInfo = createObjectPreview(
        randomId(),
        file.name,
        dateFormat,
        file.size,
        urlPreview,
        file
      )

      tempImages = [imageInfo, ...tempImages]

    }
    setImages((imgpPrev) => [...tempImages, ...imgpPrev])
  }

  const handleRemoveAllFile = async (ev) => {
    ev.preventDefault()

    if (images.length > 0) {
      setImages([])
    }
  }

  const handleRemoveOne = async (id) => {

    if (images.length > 0) {
      const imagesUpdate = images.filter((file) => {
        if (file.id !== id) {
          return file
        }
      })
      setImages(imagesUpdate)
    }
  }


  const dropPage = {
    handleEnterPage: (ev) => {
      ev.preventDefault()
    },
    handleDropPage: (ev) => {
      ev.preventDefault()

      const idSelect = ev.dataTransfer.getData("idSelect")
      const idHover = ev.target.closest(".file-page")?.id

      if (idHover && idHover !== idSelect) {

        const indexSelectImage = images.findIndex(({ id }) => id === idSelect)
        const indexHoverImage = images.findIndex(({ id }) => id === idHover)

        const updateImages = [...images]

        let tempUpdateImage = updateImages[indexHoverImage]
        updateImages[indexHoverImage] = updateImages[indexSelectImage]
        updateImages[indexSelectImage] = tempUpdateImage

        setImages(updateImages)

      }

    },
    handleLeavePage: (ev) => {
      ev.preventDefault()

    }
  }


  return (
    <div className='board-file' >

      <section
        className='upload-file'
        onDragLeave={drop.handleLeaveZone}
        onDrop={drop.handleDropzone}
        onDragOver={drop.handleOverZone}
      >
        <img src="./upload.png" width={200} alt="Icone de upload" draggable={false} />

        <h2>Arraste os arquivos para aqui</h2>
        <p>Arquivos suportados JPG,JPEG e PNG</p>

        <div className='group-file'>
          <label htmlFor="file">Selecionar Arquivos</label>
          <input type="file" id="file" className='inputfile' multiple accept='image/png, image/jpeg, image/jpg' onChange={handleSelectFile} />
        </div>

        <p>Tamanho Máximo 1.5Mb</p>
      </section>

      <section className='render-preview'>
        <h2>Arquivos Selecionados: {images.length} </h2>
        <p>Você pode organizar as posições arrastando os arquivos</p>
        <button type='button' onClick={handleRemoveAllFile} >Remover Todos</button>
        <p>Obs: Sempre a primeira imagem da lista, é a capa que sera exibída da sua HQ/MANGÀ.</p>

        <article
          className='page-container'
          onDragEnter={dropPage.handleEnterPage}
          onDrop={dropPage.handleDropPage}
          onDragLeave={dropPage.handleLeavePage}
        >
          {images.length >= 1 ? images.map((target, id) => {

            return (
              <FileCardPreview
                isCapa={id === 0 ? true : false}
                key={target.id}
                id={target.id}
                title={target.name}
                date={target.date}
                sizeFile={target.size}
                alt={"Foto de pagina de mangá"}
                urlImage={target.url}
                handleRemoveOne={handleRemoveOne}
              />)
          }) :
            <div>
              <h4>Nenhuma imagem foi selecionada! Começe ja :)</h4>
              <p>Clique no botão "Selecionar Arquivos"</p>
            </div>
          }

        </article>

      </section>

    </div>
  )
};

export default UploadFileStep1