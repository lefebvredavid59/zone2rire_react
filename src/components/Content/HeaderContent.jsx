import { useParams, Link } from "react-router-dom";

import { getSubCategoryByCategoryId } from "../../data/SubCategory.ts";
import { countContentBySubCategoryId } from "../../data/Content.ts";
import { getCategorySlug } from "../../data/Category.ts";


function HeaderContent(props) {

  let { slug } = useParams();

  let categ = getCategorySlug(slug);


  let logo = `${categ.logo}`;

  return (
    <section className="py-3 text-center container">
      <div className="row py-lg-3">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">
            <i className={`me-2 ${logo}`}></i> {props.title}
          </h1>
          <p className="my-2">Catégorie disponible :</p>
          <p className="d-flex justify-content-around">
            {getSubCategoryByCategoryId(categ.id).map((subcateg) => (
              <Link key={categ.id + subcateg.id}
              to={`/${categ.slug}/${subcateg.slug}`}
                className="badge rounded-pill bg-primary position-relative mt-2 text-decoration-none text-white"
              >
                {subcateg.name}
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  {countContentBySubCategoryId(subcateg.id)}
                  <span className="visually-hidden">Contenue disponible</span>
                </span>
              </Link>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeaderContent;
