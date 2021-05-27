function C1(input){
    return (<div>This is a Functional Component{input}</div>);
}
function mamo(C2(input){
    return (<div>This is a memoized functional Component{input}</div>);
})
class c3 extends Component {
    render(){return <div>This is a Component</div>}
}
class c4 extends React.PureComponent {
    render(){return <div>This is Pure Component</div>}
}