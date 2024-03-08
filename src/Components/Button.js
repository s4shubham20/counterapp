export const Button = (props) => {
    return (
        <>
            <button onClick={props.click} className={props.class}>
                <span className="fs-5 fw-bold">{props.innerText}</span>
            </button>
        </>
    )
}