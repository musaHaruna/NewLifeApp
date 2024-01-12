import api from "../index.js";

class UserOBJ {

    //update profile
    updateProfile = async (data) => {
        try {
            // Check if data is not empty

            const response = await api.put("api/users/profile", data);
            return response.data;
        } catch (err) {
            throw err?.response?.data || err.message;
        }
    };
    //update profile
    updateAbout = async (data) => {
        try {
            // Check if data is not empty

            const response = await api.put("api/users/about", data);
            return response.data;
        } catch (err) {
            throw err?.response?.data || err.message;
        }
    };

}
const user = new UserOBJ();
export default user;
