import api from '../index.js'

class UserOBJ {
  //update profile
  updateProfile = async (data) => {
    try {
      // Check if data is not empty

      const response = await api.put('api/users/profile', data)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }
  //update about
  updateAbout = async (data) => {
    try {
      // Check if data is not empty

      const response = await api.put('api/users/about', data)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }
  //add education
  addEducation = async (data) => {
    try {
      // Check if data is not empty

      const response = await api.put('api/users/education', data)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }
  //update education
  updateEducation = async (params, data) => {
    try {
      // Check if data is not empty

      const response = await api.put(`api/users/education/${params}`, data)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }
}

const user = new UserOBJ()
export default user
