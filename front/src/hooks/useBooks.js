import useSelector from 'react-redux';

export const useBooks = () => {
    const {books} = useSelector(state => state);

    return {books}
}