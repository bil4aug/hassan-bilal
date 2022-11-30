import React from 'react';

interface IFirstProps{
}

interface IFfirstState{
 counter:number;
}


class First extends React.Component<IFirstProps,IFfirstState > {
    constructor(props: IFirstProps) {
        super(props);
      console.log("Constructor");
      this.state = { counter: 0};
    }
    
    shouldComponentUpdate(nextProps: Readonly<IFirstProps>, nextState: Readonly<IFfirstState>, nextContext: any): boolean {
        console.log("Should update");
        return true;
    }

    componentDidMount(): void {
        console.log("mounted")
    }

    componentDidUpdate(prevProps: Readonly<IFirstProps>, prevState: Readonly<IFfirstState>, snapshot?: any): void {
        console.log("updated")
    }

    static getDerivedStateFromProps(props: IFirstProps, state: IFfirstState) {
        return null; // No change to state
    }

    counter = () =>{
        this.setState(({counter: (this.state.counter + 1)}))
    }


    render(): React.ReactNode {
        // return <>{this.state.counter}</>
        return<><button type="button" onClick={this.counter}>Click Me!</button>{this.state.counter}</>
        
    }
  }

export default First