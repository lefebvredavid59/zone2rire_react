import { useParams } from "react-router-dom";
import { getCategorySlug } from "../data/Category.ts";

function CardContent() {
  let { slug } = useParams();

  let categ = getCategorySlug(slug);

  if (categ.video === true) {
    return (
      <div className="col">
        <div className="card shadow-sm">
          <div class="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>
          <div className="card-body">
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
    );
  } else if (categ.audio === true) {
    return (
      <div className="col">
        <div className="card shadow-sm">
          <div className="card-header">
            <h5 className="card-title text-center">Choum Best of Etienne Daho</h5>
          </div>
          <div className="card-body text-center">
            <figure>
              <audio controls src="https://www.coolspot.fr/sons/Choum---Best-of-Etienne-Daho.mp3">
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </figure>
            <div className="d-flex justify-content-between align-items-center">
              <div className="">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (categ.picture === true) {
    return (
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
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
              </div>
              <small className="text-muted">25/02/22</small>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
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
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
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
    );
  }
}

export default CardContent;
