import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddClasses = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        coach_name: '',
        timing: '',
        price: '',
    });
  
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
        await axios.post('https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes', formData);
        navigate('/class');
      } catch (error) {
        console.error('Error adding classes:', error);
      }
    };
  
    return (
      <div>
        <h2>Create Classes</h2>
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
          <button type="submit" className="button_submit">Add</button>
        </form>
      </div>
    );
  };
  export default AddClasses