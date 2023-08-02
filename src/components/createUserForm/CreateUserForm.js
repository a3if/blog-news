
import './CreateUserForm.css'
const CreateUserForm = ({submitHandler,handleChange,inputValues}) => {
 
  return (
    <div className="user-form">
      <form onSubmit={submitHandler}>
        <h1>Create User</h1>
        <input
          type="text"
          placeholder="First Name"
          name="first_name"
          value={inputValues.first_name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
          value={inputValues.last_name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={inputValues.username}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={inputValues.password}
          onChange={handleChange}
          required
        />

        <select name="role" value={inputValues.role.toString()} onChange={handleChange}   required>
        <option value="true">True</option>
        <option value="false">False</option>
        </select>
        <button>create user</button>
      </form>
    </div>
  );
};

export default CreateUserForm;
