import { useParams } from "react-router-dom";
import NoMatch from "../NoMatch";

import { getCategorySlug } from "../../data/Category.ts";
import { getSubCategoryBySlug } from "../../data/SubCategory.ts";

import Helmet from "react-helmet";
import CardContent from "../../components/Content/CardContent";
import HeaderContent from "../../components/Content/HeaderContent";

function SubContent() {
  let { slug, subslug } = useParams();

  if (!subslug) {
    return <NoMatch />;
  }

  let categ = getCategorySlug(slug);

  let subcat = getSubCategoryBySlug(subslug);

  if (!subcat) {
    return <NoMatch />;
  }

  let name = `${categ.name} ${subcat.name}`;

  return (
    <div>
      <Helmet>
        <title>Zone 2 Rire | {name}</title>
      </Helmet>

      <main>
      <HeaderContent 
        title={name}/>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-center">
              <CardContent />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SubContent;