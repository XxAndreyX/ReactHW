// const Inner = ({name})=>{
//   const greeting = 'hello' + name
//   return <div>{greeting}</div>
// }
// const Second = ({surname}) => {
//   return <h1>{surname}</h1>
// }
// const Outer = ()=>{
//     return (<div>
//       <div>This is my first component!</div>
//       <Inner name = "Valera"/>
//       <Second surname = "Gubanov"/>

//     </div>)
// }




// const Inner = ({name, onClick}) =>{
//   return (<div>
//     <button onClick = {onClick}>{name}</button>
//   </div>)
// }

// class Outer extends React.Component{
//   state = {
//     message: 'GUBANOV',
//     key1: 1234
//   }

//   ChangeStateMessage = () =>{
//     // this.state.message = 'Ha ha ha!' - это неправильный вариант, нужно через готовую функцию
//     this.setState({message: 'ha ha ha!!'})
//   }
//   render(){
//     return (
//     <div>
//       <Inner name = "Click me!" onClick = {this.ChangeStateMessage}/>
//       <div>{this.state.message}</div>
//     </div>)
//   }
// }




//реализовать компонент, рисующий кнопку и рядом число


// const Inner = ({onClick}) => {
//   return <button onClick = {onClick}>Click me!</button>
// }
// class Outer extends React.Component{
//   state = {
//     counter: 0
//   }
//   ChangeCounter = ()=>{
//     this.setState(state => {
//       return {
//         counter: state.counter + 1
//       }
//     })
//   }
//   render(){
//     return(
//       <div>
//         <Inner onClick = {this.ChangeCounter}/>
//         <div>{this.state.counter}</div>
//       </div>)
//   }
// }








// class App extends React.Component{
//   state = {
//     password: '',
//     description: ''
//   }

//   handleChange = (event)=>{
//     const {value, name} = event.currentTarget
//     this.setState({[name]: value})
//   }
//   render(){
//     return(
//       <div>
//         <input value = {this.state.password} onChange = {this.handleChange} name = "password"/>
//         <input value = {this.state.description} onChange = {this.handleChange} name = "description"/>
//       </div>
//     )
//   }
// }

// const arr = [
//   {
//     id: 1,
//     data: 'Hello'
//   },
//   {
//     id:2 ,
//     data:'World'
//   }
// ]
// const Item = ({id, data})=>{
//   return (
//     <div>
//       {id} - {data}
//     </div>
//   )
// }
// class App extends React.Component{
//   state = {
//     arr 
//   }
//   render(){
//     return (
//       <div>
//       </div>
//     )
//   }
// }

let user = {
    firstName: "Вася",
    sayHi() {
      console.log(`Привет, ${user.firstName}!`);
    }
  };
  
  setTimeout(user.sayHi, 1000);