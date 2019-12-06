HOC: A higher order component in React is a pattern used to share common functionality between
    components without repeating code.
    A HOC function takes a component as an argument  and returns a component. It transforms a component
    into another component and adds additional data or functionality

    const NewComponent = (BaseComponent) => {
      // ... create new component from old one and update
        return UpdatedComponent
    }



    const higherOrderComponent = (WrappedComponent) => {
        class HOC extends React.Component {
            render(){
                return <WrappedComponent />
            }
        }
        return HOC;
    };

    //We can invoke the HOC as follows:
    const SimpleHOC = higherOrderComponent(MyComponent);
