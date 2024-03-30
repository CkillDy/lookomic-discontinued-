const CategoryCard = (
  { id, name, description, children }) => {

  return (
    <article className="articleCard"
      id={id}>

      <h2>{name}</h2>
      {description ? <p>{description}</p> : null}
      <picture >{children}</picture>
    </article>
  )
}

export default CategoryCard