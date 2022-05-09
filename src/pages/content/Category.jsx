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

  let name = `${categ.name} ${categ.slug} ${categ.logo}`;

  return <p>Category {categ.name}</p>;
}

export default Category;
