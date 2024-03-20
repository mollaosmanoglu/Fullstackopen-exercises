import courses from "./coursesData";

const Header = ({name}) => {
    return (
        <h2>
            {name}
        </h2>
    )
}


const Content = ({courses}) => {
  const total = courses.parts.reduce((acc, current) => acc + current.exercises, 0);
    return (
        <div>
            {courses.parts.map(course => 
            <p key={course.id}>
                {course.name} {course.exercises}
            </p>)}
            <p>
              <strong>total of {total} exercises</strong>
            </p>
        </div>

    )
}

const App = () => {
    return (
        <div>
            <h1> Web development curriculum</h1>
            <Header name={courses[0].name}/>
            <Content courses={courses[0]}/>
            <Header name={courses[1].name}/>
            <Content courses={courses[1]}/>
        </div>
    )
}

export default App