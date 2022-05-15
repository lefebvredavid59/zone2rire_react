import { useParams } from "react-router-dom";
import NoMatch from "../NoMatch";
import { getCategorySlug } from "../../data/Category.ts";
import Helmet from "react-helmet";
import CardContent from "../../components/Content/CardContent";
import HeaderContent from "../../components/Content/HeaderContent";
import { findContentByCategoryId } from "../../data/Content.ts";

function Content() {
  const { slug } = useParams();

  const categ = getCategorySlug(slug);

  const content = findContentByCategoryId(categ);

  const name = `${categ.name}`;

  if (!slug) {
    return <NoMatch />;
  }

  if (!categ) {
    return <NoMatch />;
  }

  return (
    <div>
      <Helmet>
        <title>Zone 2 Rire | {name}</title>
      </Helmet>

      <main>
        <HeaderContent title={name} />

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-center">
              {content.map((content) => (
                <CardContent key={content.id} 
                content={content} 
                  name={content.name}
                  slug={content.slug}
                  picture={content.picture}
                  video={content.video_link}
                  audio={content.audio_link}
                  blague={content.blague}
                  devinette={content.devinette}
                  reponse={content.reponse}
                  date={content.date_created}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Content;
