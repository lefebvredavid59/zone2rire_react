import { Link, useParams } from "react-router-dom";
import NoMatch from "../NoMatch";
import { getCategorySlug } from "../../data/Category.ts";
import { getSubCategoryByCategoryId } from "../../data/SubCategory.ts";
import { countContentBySubCategoryId } from "../../data/Content.ts";
import Helmet from "react-helmet";

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
                    <span className="visually-hidden">unread messages</span>
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
             
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c" />
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>

                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            View
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Edit
                          </button>
                        </div>
                        <small className="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Category;
