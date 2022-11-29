export const FirstApp = ({ title, subTitle }) => {

    // console.log(props);

    return (
        <>
            <h1>{ title }</h1>
            <p>subtitle enviado desde el componente padre: '{ subTitle }'</p>
        </>
    );
};