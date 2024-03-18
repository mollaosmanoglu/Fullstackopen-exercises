const Header = (course) => {
  return (
    <h1> {course.name} </h1>
  )
}

const Part = ({parts, exercises, index}) => {
  return (
    <div>
      <p>{parts[index]} {exercises[index]}</p>
    </div>
  )

}

const Content = ({parts, exercises}) => {
  return (
    <div>
      < Part parts={parts} exercises={exercises} index={0} />
      < Part parts={parts} exercises={exercises} index={1} />
      < Part parts={parts} exercises={exercises} index={2} />
    </div>
  )
}

const Total = ({exercises}) => {

  return (
    <div>
      <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
    </div>
  )
}

const App = () => {
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercises = [10, 7, 14]

  return (
    <div>
      <Header name= 'Half Stack application development' />
      <Content parts={parts} exercises = {exercises}  />
      <Total exercises = {exercises}/>
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