import * as React from 'react';
import Select from 'react-select';
import DropArea from './Components/DropArea/DropArea';
import Header from './Components/Header/Header';
import Result from './Components/Result/Result';


interface IState {
  backgroundColor:string
  result:string
  filelength:number
}

const Color = [
    { label: "Black", value: "#323639" },
    { label: "Green", value: "#47B77C" },
    { label: "Red", value: "#EF4E4E" },
];

class App extends React.Component<{},IState>{
    public constructor(props:any){
      super(props)
      this.state = {
        backgroundColor:"#323639",
        filelength:0,
        result:""
      }

    }

    public resultstate = (resultString:string,filelen:any) => {
      this.setState({result:resultString,filelength:filelen})
    }

    public changeColor = (option:any) => {
        this.setState(prevState => {
            return {
                ...prevState,
                backgroundColor:option.value
            }
        })
    }

    public render() {
      return (
        <div style={{background:this.state.backgroundColor}}>
            <Header />
            <DropArea setResults={this.resultstate} />
            <Result result={this.state.result} filelength={this.state.filelength} />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Select onChange={this.changeColor} options={ Color } />
                    </div>
                </div>
            </div>
        </div>
      );
    }
}
export default App;
