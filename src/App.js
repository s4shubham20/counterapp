import { connect } from "react-redux";
import { Counter } from './Components/Counter';
import  { Button }  from './Components/Button';

function App(props){
  return(
    <Counter>
      <div className="card w-75 mx-auto my-5 shadow">
        <div className="card-header">
            <h1 className="bg-light text-center">{props.counter}</h1>
        </div>
        <div className="card-body py-5">
            <div className="d-flex justify-content-between">
                <Button innerText="+" click={() => props.modifyHandler("INC", 1)} class={"btn btn-success"}></Button>
                <Button innerText="+2" click={() =>props.modifyHandler("INC", 2)} class={"btn btn-success"}></Button>
                <Button innerText="-" click={() => props.modifyHandler("DEC", 1)} class={"btn btn-danger"}></Button>
                <Button innerText="-2" click={() => props.modifyHandler("DEC", 2)} class={"btn btn-danger"}></Button>
            </div>
        </div>
        <div className="card-footer">
            <h2 className="text-center">Your total cart amount is ${(props.price) * (props.counter)}</h2>
        </div>
      </div>
    </Counter>
  )
}
const mapStateToProps = (state) => {
  return{
    counter : state.counter,
    price : state.price,
  }
}

const mapActionToProps = (dispatch) => {
  return{
    modifyHandler: (action, val) => {
      dispatch({
        type:action,
        value:val
      });
    }
  }
}

export default connect(mapStateToProps, mapActionToProps)(App);
