import PropTypes from "prop-types";

function Movie({ title, coverImg, year, rating, summary, genres }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={coverImg} alt={title} />
      <h4>year : {year}</h4>
      <h4>rate : {rating}</h4>
      <p>Summary : {summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
