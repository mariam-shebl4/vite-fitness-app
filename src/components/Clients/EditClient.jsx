import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditClient = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      name: '',
      phoneNumber: '',
      address: '',
      subscriptionType: '',
    });
  
  
  
    const fetchClient = async () => {
      try {
        const response = await axios.get(`https://64103182e1212d9cc92c334f.mockapi.io/api/gym/clients/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching client:', error);
      }
    };
    useEffect(() => {
      fetchClient();
    }, []);
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
          // Check if any of the form fields are empty
          if (
        formData.name.trim() === '' ||
        formData.phoneNumber.trim() === '' ||
        formData.address.trim() === '' ||
        formData.subscriptionType.trim() === ''
      ) {
        alert('Please fill in all fields.');
        return;
      }
  
  
  
      try {
        await axios.put(`https://64103182e1212d9cc92c334f.mockapi.io/api/gym/clients/${id}`, formData);
        navigate(``);
      } catch (error) {
        console.error('Error updating client:', error);
      }
    };
  
    return (
      <div>
        <h2>Edit Client</h2>
        <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column"}}>
          <label  style={{display:"flex", justifyContent:"space-between", margin:"12px 0"}}>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label  style={{display:"flex", justifyContent:"space-between", margin:"12px 0"}}>
            Mobile Number:
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          </label>
          <label  style={{display:"flex", justifyContent:"space-between", margin:"12px 0"}}>
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
          </label>
          <label  style={{display:"flex", justifyContent:"space-between", margin:"12px 0"}}>
            Subscription Type:
            <input type="text" name="subscriptionType" value={formData.subscriptionType} onChange={handleChange} />
          </label>
          <button type="submit" className="button_submit">Save</button>
        </form>
      </div>
    );
  };
  export default EditClient