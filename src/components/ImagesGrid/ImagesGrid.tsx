import { ImagesGridProps } from "../../componentsType/propsTypes";
import { useNasaSearchResults } from "../../hooks/useNasaSearchResults";
import { AppLoading } from "../AppLoading";
import { NasaImageCard } from "../NasaImageCard/NasaImageCard";
import "./ImagesGrid.scss"

export const ImagesGrid = ({ query = "" }: ImagesGridProps) => {
  const { nasaImageResults, loadingNasaSearchResults, errorNasaSearchResults } =
    useNasaSearchResults(query);

  return (
    <section className="images">
      <h2 className="images__subtitle">Searching images with "{query}"</h2>
      {loadingNasaSearchResults ? <AppLoading /> : null}
      {errorNasaSearchResults ? <p>{errorNasaSearchResults.message}</p> : null}
      {nasaImageResults?.collection?.items !== null ? (
        <div className="images__container">
          {nasaImageResults?.collection?.items.map((item) => (
            <NasaImageCard
              nasaImage={item?.data[0]}
              key={item?.data[0]?.nasa_id}
            />
          ))}
        </div>
      ) : (
        <p>There aren't results.</p>
      )}
    </section>
  );
};
