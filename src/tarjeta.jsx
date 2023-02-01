export default function Tarjeta(props) {

    console.log(props);
    return (
        <div className="card border-dark m-1">
            <div className="card-body text-dark">
                <h6 className="card-title">{props.days.day}</h6>
                <img width={'48px'} height={'48px'} src={props.days.iconURL} alt={props.days.comment} />
                <h6 style={{ fontSize: '0.7rem' }}>Min: {props.days.min_temp.c}°C  Max:{props.days.max_temp.c}°C</h6>
            </div>
        </div >
    )
}