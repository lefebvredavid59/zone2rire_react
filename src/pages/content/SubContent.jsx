import { useParams } from "react-router-dom";
import NoMatch from "../NoMatch";

import { getCategorySlug } from "../../data/Category.ts";
import { getSubCategoryBySlug } from "../../data/SubCategory.ts";

import Helmet from "react-helmet";
import CardContent from "../../components/Content/CardContent";
import HeaderContent from "../../components/Content/HeaderContent";

import { getContentBySubCategoryId } from "../../data/Content.ts";

function SubContent() {
  const { slug, subslug } = useParams();

  const categ = getCategorySlug(slug);

  const subcat = getSubCategoryBySlug(subslug);

  const name = `${categ.name} ${subcat.name}`;

  if (!subslug) {
    return <NoMatch />;
  }

  if (!subcat) {
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
              {getContentBySubCategoryId(subcat.id).map((content) => (
                <CardContent
                  key={content.id}
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

export default SubContent;
