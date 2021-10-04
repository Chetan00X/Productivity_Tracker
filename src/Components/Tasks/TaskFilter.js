import "./TaskFilter.css";
const TaskFilter = (props) => {
  const dropdownChangeHandler=(e)=>{
    props.onChangeFilter(e.target.value);
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='Jan'>Jan</option>
          <option value='Feb'>Feb</option>
          <option value='Mar'>Mar</option>
          <option value='Apr'>Apr</option>
          <option value='May'>May</option>
          <option value='Jun'>Jun</option>
          <option value='July'>Jul</option>
          <option value='Aug'>Aug</option>
          <option value='Sep'>Sep</option>
          <option value='Oct'>Oct</option>
          <option value='Nov'>Nov</option>
          <option value='Dec'>Dec</option>
        </select>
      </div>
    </div>
  );
};
export default TaskFilter;
