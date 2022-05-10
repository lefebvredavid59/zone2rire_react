import { Link, useParams } from "react-router-dom";
import NoMatch from "../NoMatch";
import { getCategorySlug } from "../../data/Category.ts";
import { getSubCategoryByCategoryId } from "../../data/SubCategory.ts";
import { countContentBySubCategoryId } from "../../data/Content.ts";
import Helmet from "react-helmet";
import CardContent from "../../components/CardContent";

function Category() {
  let { slug } = useParams();

  if (!slug) {
    return <NoMatch />;
  }

  let categ = getCategorySlug(slug);

  if (!categ) {
    return <NoMatch />;
  }

  let name = `${categ.name}`;
  let logo = `${categ.logo}`;

  return (
    <div>
      <Helmet>
        <title>Zone 2 Rire | {name}</title>
      </Helmet>

      <main>
        <section className="py-3 text-center container">
          <div className="row py-lg-3">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">
                <i className={`me-2 ${logo}`}></i> {name}
              </h1>
              <p className="my-2">Catégorie disponible :</p>
              <p className="d-flex justify-content-around">
                {getSubCategoryByCategoryId(categ.id).map((subcateg) => (
                  <Link
                    to="/"
                    className="badge rounded-pill bg-primary position-relative mt-2 text-decoration-none text-white"
                  >
                    {subcateg.name}
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      {countContentBySubCategoryId(subcateg.id)}
                      <span className="visually-hidden">
                        Contenue disponible
                      </span>
                    </span>
                  </Link>
                ))}
              </p>
            </div>
          </div>
        </section>

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

export default Category;
