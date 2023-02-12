import './App.css';

function App() {
  return (
    <section className='container'>
      <h1>To Do List</h1>
      <form className='form-group'>
        <input type="text" className="text-input"></input>
        <button type='submit' className='submit-button'>เพิ่มข้อมูล</button>
      </form>
    </section>
    );
}

export default App;
