import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditClasses = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        coach_name: '',
        timing: '',
        price: '',
    });
  
  
  
    const fetchClasses = async () => {
      try {
        const response = await axios.get(`https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };
    useEffect(() => {
        fetchClasses();
    }, []);
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
          // Check if any of the form fields are empty
          if (
        formData.title.trim() === '' ||
        formData.coach_name.trim() === '' ||
        formData.timing.trim() === '' ||
        formData.price.trim() === ''
      ) {
        alert('Please fill in all fields.');
        return;
      }
  
  
  
      try {
        await axios.put(`https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes/${id}`, formData);
        navigate(`/class`);
      } catch (error) {
        console.error('Error updating classes:', error);
      }
    };
  
    return (
      <div>
        <h2>Edit Classes</h2>
        <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column"}}>
          <label  style={{display:"flex", justifyContent:"space-between", margin:"12px 0"}}>
          title:
            <input type="text" name="title" value={formData.title} onChange={handleChange} />
          </label>
          <label  style={{display:"flex", justifyContent:"space-between", margin:"12px 0"}}>
          Coach Name:
            <input type="text" name="coach_name" value={formData.coach_name} onChange={handleChange} />
          </label>
          <label  style={{display:"flex", justifyContent:"space-between", margin:"12px 0"}}>
          Timing:
            <input type="number" name="timing" value={formData.timing} onChange={handleChange} />
          </label>
          <label  style={{display:"flex", justifyContent:"space-between", margin:"12px 0"}}>
          price:
            <input type="number" name="price" value={formData.price} onChange={handleChange} />
          </label>
          <button type="submit" className="button_submit">Save</button>
        </form>
      </div>
    );
  };
  export default EditClasses