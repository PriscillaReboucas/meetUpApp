import classes from './CardContainer.module.css'


function CardContainer (props) {
    return (
        <div className = {classes.container}>
            {props.children}
        </div>
    )
}

export default CardContainer;