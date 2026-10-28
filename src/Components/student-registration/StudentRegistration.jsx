import './StudentRegistration.css';
function StudentRegistration(){
    return (
        <div className="student-registration-container">
        <div className="student registration form">
        <h2> StudentRegistration</h2>
        <div className="item">
            <label htmlFor="fullName" >Full Name</label>
            <input type="text" name="fullName" id="fullName" />
        </div>
        <div className="item">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
        </div>
        <div className="item">
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" id="phone" />
        </div>
        <div className="item">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
        </div>
        <div className="item">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" id="confirmPassword" />
        </div>
        <div className="item">
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender">
            <option value="male">male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
        </div>
        <button type="submit" className="re-btn">Register</button>
        </div>
        </div>
    )
}





export default StudentRegistration;
