import { useParams } from "react-router-dom";
import { getCategorySlug } from "../../data/Category.ts";
import { Answer } from "../../styles/CardContent";

function CardContent(props) {
  let { slug } = useParams();
  let categ = getCategorySlug(slug);

  if (categ.video) {
    return (
      <div className="col">
        <div className="card shadow-sm">
          <div className="card-header">
            <h5 className="card-title text-center">{props.name}</h5>
          </div>
          <div class="ratio ratio-16x9">
            <iframe
              src={props.video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted">{props.date.getFullYear()}</small>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (categ.audio) {
    return (
      <div className="col">
        <div className="card shadow-sm">
          <div className="card-header">
            <h5 className="card-title text-center">{props.name}</h5>
          </div>
          <div className="card-body text-center">
            <figure>
              <audio controls src={props.audio}>
                Votre navigateur ne supporte pas l'élément
                <code>audio</code>.
              </audio>
            </figure>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted">{props.date.getFullYear()}</small>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (categ.picture) {
    return (
      <div className="col">
        <div className="card shadow-sm">
          <img
            className="bd-placeholder-img card-img-top"
            src={props.picture}
            alt={`/${props.name}`}
          />

          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted">{props.date.getFullYear()}</small>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (categ.devinette) {
    return (
      <div className="col">
        <div className="card shadow-sm">
          <div className="card-header">
            <h5 className="card-title text-center">{props.name}</h5>
          </div>
          <div className="card-body">
            <p className="card-text text-center">{props.devinette}</p>

            <Answer content={props} />
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted">{props.date.getFullYear()}</small>
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
                  Voir
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
