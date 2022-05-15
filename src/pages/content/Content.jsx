import { useParams } from "react-router-dom";
import NoMatch from "../NoMatch";
import { getCategorySlug } from "../../data/Category.ts";
import Helmet from "react-helmet";
import CardContent from "../../components/Content/CardContent";
import HeaderContent from "../../components/Content/HeaderContent";

function Content() {
  let { slug } = useParams();

  if (!slug) {
    return <NoMatch />;
  }

  let categ = getCategorySlug(slug);

  if (!categ) {
    return <NoMatch />;
  }

  let name = `${categ.name}`;

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

export default Content;
