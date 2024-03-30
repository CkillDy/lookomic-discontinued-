import React from "react"
import CategoryCard from "../cards/CategoryCard"
import SlideCard from "../cards/SlideCard"
import MangaCard from "../cards/CategoryCard.jsx"

let images = [
  {
    id: 1,
    img: "https://loremflickr.com/320/240/dog"
  },
  {
    id: 2,
    img: "https://loremflickr.com/320/240/cat"
  },
  {
    id: 3,
    img: "https://loremflickr.com/320/240/bird"
  },
  {
    id: 4,
    img: "https://loremflickr.com/320/240/kong"
  }
]


const Home = () => {
  return (
    <div>

      <section className="container-slide">
        <SlideCard
          imageUrl={"http://google.com.br/cat.png"}
          title={"Titulo do Card"}
          description={"Foto do Naruto"} />
        <SlideCard
          imageUrl={"http://google.com.br/cat.png"}
          title={"Titulo do Card"}
          description={"Foto do Naruto"} />

        <SlideCard
          imageUrl={"http://google.com.br/cat.png"}
          title={"Titulo do Card"}
          description={"Foto do Naruto"} />
      </section>


      <CategoryCard
        id={2}
        name={"komic Populares"}
        description={"Aqui estão os principais mangas recentes"}
      >
        {images.map((item) => {
          return <MangaCard
            id={item.id}
            key={item.id}
            alt={"Imagem de capa de anime "}
            title={"Animais em ação"}
            urlImg={item.img}
            isComplete={false}
            userName={"CkillDy"}
            categorys={["Ação", "Aventura"]}
          />

        })}
      </CategoryCard>

      <CategoryCard
        id={2}
        name={"komic Recomendados"}
        description={"Aqui estão os principais mangas recentes"}
      >
        {images.map((item) => {
          return <MangaCard
            id={item.id}
            key={item.id}
            alt={"Imagem de capa de anime "}
            title={"Animais em ação"}
            urlImg={item.img}
            isComplete={false}
            userName={"CkillDy"}
            categorys={["Ação", "Aventura"]}
          />

        })}
      </CategoryCard>


      <CategoryCard
        id={2}
        name={"komic Recentes"}
        description={"Aqui estão os principais mangas recentes"}
      >
        {images.map((item) => {
          return <MangaCard
            id={item.id}
            key={item.id}
            alt={"Imagem de capa de anime "}
            title={"Animais em ação"}
            urlImg={item.img}
            isComplete={false}
            userName={"CkillDy"}
            categorys={["Ação", "Aventura"]}
          />

        })}
      </CategoryCard>


      <CategoryCard id={1} name={"Ação"}>
        {images.map((item) => {
          return <MangaCard
            id={item.id}
            key={item.id}
            alt={"Imagem de capa de anime "}
            title={"Animais em ação"}
            urlImg={item.img}
            isComplete={false}
            userName={"CkillDy"}
            categorys={["Ação", "Aventura"]}
          />

        })}
      </CategoryCard>

      <CategoryCard id={2} name={"Aventura"}>
        {images.map((item) => {
          return <MangaCard
            id={item.id}
            key={item.id}
            alt={"Imagem de capa de anime "}
            title={"Animais em ação"}
            urlImg={item.img}
            isComplete={false}
            userName={"CkillDy"}
            categorys={["Ação", "Aventura"]}
          />

        })}
      </CategoryCard>

      <CategoryCard id={3} name={"Romance"}>
      </CategoryCard>

      <CategoryCard id={4} name={"Comédia"}>
      </CategoryCard>

      <CategoryCard id={5} name={"Drama"}>
      </CategoryCard>

      <CategoryCard id={7} name={"Terror"}>
      </CategoryCard>

      <CategoryCard id={8} name={"Ficção Científica"}>
      </CategoryCard>

      <CategoryCard id={8} name={"Suspense"}>
      </CategoryCard>

    </div>
  )
}
export default Home

