import axios from "axios";
import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";

const ClassesDetails = () => {
    const [classes, setClasses] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
  
  
    const fetchClasses = async () => {
      try {
        const response = await axios.get(`https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes/${id}`);
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };
  
    useEffect(() => {
      fetchClasses();
    }, []);
    const deleteClasses = async () => {
      try {
        await axios.delete(`https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes/${id}`);
        navigate('/class');
      } catch (error) {
        console.error('Error deleting classes:', error);
      }
    };
  
    return (
      <div>
        <h2>classes Details</h2>
        <div>
          <img src={classes.image} alt="classes Profile" />
          <h3>{classes.title}</h3>
          <p>Coach Name: {classes.coach_name}</p>
          <p>Description: {classes.description}</p>
          
          <button onClick={deleteClasses} className="delete-button">Delete</button>
         
        </div>
      </div>
    );
  };
  export default ClassesDetails