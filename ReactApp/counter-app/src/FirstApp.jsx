import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle }) => {

    return (

        <>
            <h1>{ title }</h1>
            <p>subtitle enviado desde el componente padre: '{ subTitle }'</p>
        </>
    );
};

FirstApp.propTypes = {
    title : PropTypes.string.isRequired,
    subTitle : PropTypes.number 
}

FirstApp.defaultProps = {
    title : 'No hay titulo',
    subTitle : 'No hay subtitulo'
}