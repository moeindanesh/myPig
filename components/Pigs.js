import Icon from './Icon';

class Pigs extends React.Component{

    constructor(props){
        super(props);

        this.handlePigs = this.handlePigs.bind(this);
        this.result = 0;
        console.log('const');

    }
    componentWillUpdate(){
        console.log('updaaate');
        this.result = 0;
    }
    handlePigs(key){
        this.result += Number(this.props.pigs[key]);
        return <div key={key} style={pigContainer}><Icon/><span style={pigName}>{key}</span> <span style={pigValue}>${this.props.pigs[key]}</span></div>;
    }
    render(){
        return(
            <div style={pigsStyle}>
                <div>
                    {Object.keys(this.props.pigs).map(this.handlePigs)}
                </div>
                <div style={pigResultContainer}>
                    <div style={pigResult}>
                        <div>
                            ${this.result}
                        </div>
                        <div style={pigResultName}>
                            budget
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pigs;

// style

const pigsStyle = {
    width: '100%',
    marginLeft: '30px',
    borderLeft: 'solid 2px #2D9AFF',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px'
}

const pigContainer = {
    paddingTop: '20px'
}

const pigName = {
    marginLeft: '20px',
    flaot: 'left'

}

const pigValue = {
    marginRight: '50px',
    float: 'right'
}


const pigResultContainer = {
    width:'350px',
}

const pigResult = {
    marginBottom: '-15px',
    textAlign: 'center',
    color: '#DF432C'
}

const pigResultName = {
    fontSize: '10px'
}
