import Header from '../components/Header';
import Pigs from '../components/Pigs';
import Icon from '../components/Icon';

class Index extends React.Component{
    
    constructor(props){
        super(props);
        
        this.result = 0;
        this.state = {
            pigs : {
                
            }
        }

    }

    update(){
        
        let newState = this.state.pigs;
        newState[this.refs.name.value] = Number(this.refs.value.value);
        this.setState({
            pigs : newState
        });
    }
    render(){
        
        return(
            <div style={wrapperStyle}>
                <Header />
                <Pigs result={this.result} pigs={this.state.pigs} />

                <div style={inputContainer}>
                    <Icon/>
                    <div>
                        <label style={inputLabel}>pig name </label>
                        <input style={inputBox} ref='name' />
                    </div>
                    <Icon/>
                    <div>
                        <label style={inputLabel}> pig value</label>
                        <input style={inputBox} ref='value' />
                    </div>
                    <div >
                        <button style={inputSubmit} onClick={this.update.bind(this)}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index;

const wrapperStyle = {
    width: '400px',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)'
}

const inputContainer = {
    marginLeft: '30px',
    borderLeft: 'solid 2px #2D9AFF',
    paddingTop: '50px',
    paddingBottom: '20px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px'
}

const inputLabel = {
    marginLeft: '20px',
    lineHeight: '50px'
}

const inputBox = {
    position: 'absolute',
    right: '30px',
    marginTop: '17px',
    width: '150px',
    border: '1px solid #2D9AFF',
    borderRadius: '1px'
}

const inputSubmit = {
    marginLeft: '20px',
    width: '80px',
    height: '30px',
    background: '#2D9AFF',
    border: '1px solid #2D9AFF',
    color: '#fff',
    fontFamily: 'Montserrat',
}