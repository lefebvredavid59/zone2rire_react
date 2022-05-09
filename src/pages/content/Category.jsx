import { useParams } from "react-router-dom";
import NoMatch from "../NoMatch";
import { getCategorySlug } from "../../data/Category.ts";

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
    <div className="text-center">
      <p>
        <i className={`me-2 ${logo}`}></i> Category {name}
      </p>
    </div>
  );
}

export default Category;
