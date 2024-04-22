import './Title.css'

function Title(props) {
    return(
        <div className='title'>
            <p>{props.mainTitle}</p>
            <h2>{props.subTitle}</h2>
        </div>
    );
}

export default Title