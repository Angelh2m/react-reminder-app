import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions';
// import { bindActionCreators} from 'redux';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }

  }

  addReminder(){
      this.props.addReminder(this.state.text);
  }

  renderReminders(){
    const {reminders} = this.props;
     return(
       <ul className='list-group col-sm-4'>
         {
           reminders.map(reminder => {
             return(
               <li key={reminder.id} className='list-group-tiem'>
                 <div>
                   {reminder.text}
                 </div>
               </li>
             )
           })
         }
       </ul>
     )
  }

  render() {
    console.log('this.props', this.props);
    return(

      <div className="App">
          <div className="title">
            Reminder Pro
            <div className="form-line">
                <div className="form-group">
                  <input
                  onChange={event => this.setState({text:event.target.value})}
                  className="form-control"
                  placeholder="I have too.."
                />
                </div>
            </div>

            {this.renderReminders()}


            <buton
              onClick={() => this.addReminder()}
              type="button"
              className="btn btn-success">
              Add
            </buton>
          </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return{
    reminders:state
  }
}


export default connect(mapStateToProps, {addReminder}) (App);


// function mapDispatchToProps(dispatch){
//   return bindActionCreators({addReminder}, dispatch);
// }
//
// export default connect(null, mapDispatchToProps) (App);
