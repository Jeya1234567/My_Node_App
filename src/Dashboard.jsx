import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate =useNavigate();
    const handleSubmit = () =>{    
        alert("Logout successful");
          navigate("/");
    }
  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard 🎉</h1>
      <p>You logged in successfully.</p>
      <button onClick={handleSubmit}>Logout</button>
    </div>
  );
}

export default Dashboard;