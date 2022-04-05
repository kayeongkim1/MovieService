import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  //console.log(id);
  const getDetails = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
    //console.log(details);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getDetails();
  }, [getDetails]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {details.map((detail) => (
            <ShowDetail
              key={detail.id}
              // id={detail.id}
              title={detail.title}
              coverImg={detail.large_cover_image}
              year={detail.year}
              rating={detail.rating}
              summary={detail.summary}
              genres={detail.genres}
              runtime={detail.runtime}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ShowDetail({
  title,
  coverImg,
  year,
  rating,
  summary,
  genres,
  runtime,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={coverImg} alt={title} />
      <h4>year : {year}</h4>
      <h4>rate : {rating}</h4>
      <h4>runtime : {runtime}</h4>
      <p>Summary : {summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

ShowDetail.propTypes = {
  // id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Detail;
