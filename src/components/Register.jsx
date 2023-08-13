
import { useHistory } from 'react-router-dom';
import './Register.css'; // Import your CSS file
import './AvailableRooms';

const Register = ({ onClose }) => {
    const history = useHistory(); // Import useHistory to handle navigation
     
    const handleCloseForm = () => {
        history.push('/available-room'); // Redirect to Available Room page 
    };
    const handleRegisterAsTenantForm = () => {
        history.push('/tenantRegister'); // Redirect to home page
    };
    const handleRegisterasLandlordForm = () => {
        history.push('/tenantRegister'); // Redirect to home page
    };



    return (
        <div className="overlay">
            <div className="Register-container">
                <div>
                    <button className="close-btn" onClick={handleCloseForm}>
                        &times;
                    </button>
                    <div className="registration-buttons">
                        <button type="submit" className="tRegister-button" onClick={handleRegisterAsTenantForm}>Register as Tenant</button>

                        <button type="submit" className="lRegister-button" onClick={handleRegisterasLandlordForm}>Register as Landlord</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
