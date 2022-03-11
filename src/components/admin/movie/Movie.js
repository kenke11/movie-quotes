import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import EditIcon from 'components/UI/icons/EditIcon';
import DeleteIcon from 'components/UI/icons/DeleteIcon';

const Movie = (props) => {
  const { i18n } = useTranslation();

  const deleteMovieHandler = () => {
    props.DeleteMovie(props.movie.id);
  };

  return (
    <tr className='rounded-md mb-2'>
      <td className='px-6 py-4 text-sm font-medium'>{props.movie.id}</td>
      <td className='px-6 py-4 text-sm font-medium'>
        {props.movie.name[i18n.language]}
      </td>
      <td className='px-6 py-4 text-sm font-medium'>
        {moment(props.movie.created_at).format('DD/MM/YYYY')}
      </td>
      <td className='px-6 py-4  text-sm font-medium space-y-1 md:space-y-0 md:space-x-3'>
        <Link to={`${props.movie.id}/update`}>
          <button className='px-2 py-2 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-700 transition duration-200'>
            <EditIcon />
          </button>
        </Link>

        <button
          onClick={deleteMovieHandler}
          className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'
        >
          <DeleteIcon />
        </button>
      </td>
    </tr>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    DeleteMovie: (id) => dispatch(actions.DeleteMovie(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
