import React, { useState } from 'react';
import UploadFileStep1 from '../uploadStep/UploadStep1.jsx';

const Upload = () => {
  const [images, setImages] = useState([]);
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [categories, setCategories] = useState([]);
  const [modeRead, setModeRead] = useState('Column');
  const [isAdultContent, setIsAdultContent] = useState(false);

  const nextStep = () => {
    if (images.length < 1 && step === 1) {
      window.alert("Você não selecionou nenhuma imagem");
      return;
    }
    setStep((step) => step + 1);
  };

  const prevStep = () => {
    setStep((step) => step - 1);
  };

  const handleRemoveCategory = (id) => {
    const categoriesRemoved = [...categories];
    categoriesRemoved.splice(id, 1);
    setCategories(categoriesRemoved);
  };

  const handleSubmit = () => {
    // Lógica de envio aqui
    alert('Formulário enviado!');
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="upload-step">
            <button className='next-button' onClick={nextStep}>Próximo</button>
            <UploadFileStep1
              images={images}
              setImages={setImages}
            />
          </div>
        );
      case 2:
        return (
          <div className="upload-step">
            <button className='next-button' onClick={prevStep}>Voltar</button>
            <button className='next-button' onClick={nextStep}>Próximo</button>

            <div className='group-content-file'>
              <div className='input-group'>
                <label htmlFor='titulo'>Título:</label>
                <input type="text" placeholder="Ex: Doutor Pedra, As bolas do Dragão..." id='titulo' onChange={(e) => setTitle(e.target.value)} />
              </div>

              <div className='input-group'>
                <label htmlFor='descricao'>Descrição:</label>
                <textarea placeholder="Descreva sua HQ..." id='descricao' onChange={(e) => setDescription(e.target.value)}></textarea>
              </div>

              <div className='input-group'>
                <label htmlFor='tags'>Tags (separadas por vírgula):</label>
                <input type="text" id='tags' placeholder="Ex: mangá, hq, terror, lookomic" onChange={(e) => setTags(e.target.value)} />
              </div>

              <div className='input-group'>
                <label htmlFor='Categoria'>Categorias selecionadas: {categories.length}</label>
                <div className='preview-categories'>
                  {categories.map((item, id) => (
                    <div className='itemCategorie' key={id}>
                      • {item}
                      <button className='remove-category-button' onClick={() => handleRemoveCategory(id)}>Excluir</button>
                    </div>
                  ))}
                </div>

                <select className='container-category' id="Categoria" onChange={(ev) => {
                  if (categories.includes(ev.target.value)) return
                  setCategories((categories) => [ev.target.value, ...categories])
                }}>
                  <option value="Ação">Ação</option>
                  <option value="Aventura">Aventura</option>
                  <option value="Comédia">Comédia</option>
                  <option value="Drama">Drama</option>
                  <option value="Fantasia">Fantasia</option>
                  <option value="Ficção Científica">Ficção Científica</option>
                  <option value="Terror">Terror</option>
                  <option value="Esportes">Esportes</option>
                  <option value="+18">+18</option>
                  <option value="Romance">Romance</option>
                  <option value="Slice of Life">Slice of Life</option>
                  <option value="Sobrenatural">Sobrenatural</option>
                  <option value="Mistério">Mistério</option>
                  <option value="Histórico">Histórico</option>
                  <option value="Thriller">Thriller</option>
                  <option value="LGBTQIA+">LGBTQIA+</option>
                  <option value="Musical">Musical</option>
                  <option value="Psicológico">Psicológico</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Guerra">Guerra</option>
                  <option value="Mecha">Mecha</option>

                </select>
              </div>

              <div className='input-group'>
                <label htmlFor="modeRead">Modo de leitura:</label>
                <select className='container-modeRead' id="modeRead" onChange={(e) => setModeRead(e.target.value)}>
                  <option value="Column">Coluna</option>
                  {/* Adicione outras opções aqui */}
                </select>
              </div>

              <div className='input-group'>
                <div className='no-colum'>
                  <input type="checkbox" id="olderAge" onChange={(e) => setIsAdultContent(e.target.checked)} />
                  <label htmlFor='olderAge'>Conteúdo +18:</label>
                </div>
              </div>
            </div>

          </div>
        );
      case 3:
        return (
          <form className="upload-step" autoComplete='on'>
            <button className='next-button' onClick={prevStep}>Voltar</button>
            <div className='group-preview-last' >
              <h2>Revisão final antes de enviar:</h2>
              <p className='group-render-preview'>
                <div>
                  <img draggable="false" width={50} src={images[0].url} alt="Foto da capa do Mangá/HQ" />
                </div>
                <div className='center-content-preview'>
                  <p><strong>Título:</strong> {title}</p>
                  <p><strong>Descrição:</strong> {description}</p>
                  <p><strong>Tags:</strong> {tags}</p>
                  <p><strong>Gêneros:</strong> {categories.join(', ')}</p>
                  <p><strong>Modo de Leitura:</strong> {modeRead}</p>
                  <p><strong>Conteúdo +18:</strong> {isAdultContent ? 'Sim' : 'Não'}</p>
                  <button className='next-button' onClick={handleSubmit}>Enviar</button>
                </div>
              </p>
            </div>
          </form>
        );
      default:
        return null;
    }
  };


  return (
    <div className="upload-container">
      <div className="upload-progress">
        <p>Etapa {step} de 3</p>
      </div>
      {renderStepContent()}
    </div>
  );
};

export default Upload;
