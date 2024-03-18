const Header = ({name}) => {
  return (
    <h1> {name} </h1>
  )
}

const Part = ({parts, index}) => {
  return (
    <div>
      <p>{parts[index].name} {parts[index].exercises}</p>
    </div>
  )

}

const Content = ({parts}) => {
  return (
    <div>
      < Part parts={parts} index={0} />
      < Part parts={parts} index={1} />
      < Part parts={parts} index={2} />
    </div>
  )
}

const Total = ({parts}) => {

  return (
    <div>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>
  )
}

const App = () => { 
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts}  />
      <Total parts = {course.parts}/>
    </div>
  )
}


// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }


export default App