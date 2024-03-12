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

  //Get app members
  getMembers = async () => {
    try {
      // Check if data is not empty

      const response = await api.get('api/users/members')
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }

  //Get user's feeds
  getFeeds = async (page, limit) => {
    try {
      // Check if data is not empty

      const response = await api.get(
        `api/users/feeds?page=${page}&limit=${limit}`
      )
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }

  //Get user's Connections
  getConnections = async () => {
    try {
      const response = await api.get(`api/users/my-connections`)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }

  //Get user's Connections
  sendConnectionRequest = async (receiverId) => {
    try {
      const response = await api.put(
        `api/users/${receiverId}/connection?status=request`
      )
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }

  //Get user's Connections
  handleConnectionRequest = async (receiverId, status) => {
    try {
      const response = await api.put(
        `api/users/${receiverId}/connection?status=${status}`
      )
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }

  //Get user's Notifications
  getNotifications = async () => {
    try {
      const response = await api.get(`api/users/notifications`)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }

  //Get all documents
  getDocuments = async () => {
    try {
      const response = await api.get(`/api/users/documents`)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }

  //Get all photos
  getPhotos = async () => {
    try {
      const response = await api.get(`/api/users/photos`)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }

  //Get all usefull-links
  getUsefullLinks = async () => {
    try {
      const response = await api.get(`/api/users/useful-links`)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }

  //Get all publications
  getPublications = async () => {
    try {
      const response = await api.get(`/api/users/publications`)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }

  // Get all events
  getEvents = async () => {
    try {
      const response = await api.get(`/api/users/events`)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }

  // Upload document
  uploadDocument = async (formData) => {
    try {
      const response = await api.post(`/api/admin/documents`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return response.data
    } catch (err) {
      console.log(err)
      throw err?.response?.data || err.message
    }
  }

  //Upload photo
  uploadPhoto = async (formData) => {
    try {
      const response = await api.post(`/api/admin/photos`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return response.data
    } catch (err) {
      console.log(err)
      throw err?.response?.data || err.message
    }
  }

  //Upload useful-links
  uploadUsefullLinks = async (data) => {
    try {
      // Check if data is not empty

      const response = await api.post('api/admin/useful-links', data)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }

  //Upload publications
  uploadPublications = async (formData) => {
    try {
      const response = await api.post(`/api/admin/publications`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return response.data
    } catch (err) {
      console.log(err)
      throw err?.response?.data || err.message
    }
  }

  //Upload events
  uploadEvents = async (formData) => {
    try {
      const response = await api.post(`/api/admin/events`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return response.data
    } catch (err) {
      console.log(err)
      throw err?.response?.data || err.message
    }
  }

  //Create Group
  createGroup = async (data) => {
    try {
      // Check if data is not empty
      const response = await api.post('api/admin/groups', data)
      return response.data
    } catch (err) {
      console.log(err)
      throw err?.response?.data || err.message
    }
  }

  //Add forum
  addForum = async (data) => {
    try {
      // Check if data is not empty
      const response = await api.post('api/admin/groups', data)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }

  //Add fundings
  addFundings = async (formData) => {
    try {
      const response = await api.post(`api/admin/fundings`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return response.data
    } catch (err) {
      console.log(err)
      throw err?.response?.data || err.message
    }
  }

  //Make group Admin
  // makeGroupAdmin = async (group, name, privacy, description) => {
  //   try {
  //     // Check if data is not empty

  //     const response = await api.put(`api/admin/groups/${group}`, {
  //       name,
  //       privacy,
  //       description,
  //     })
  //     return response.data
  //   } catch (err) {
  //     throw err?.response?.data || err.message
  //   }
  // }

  //Forum Members
  addForumMember = async (forum, data) => {
    try {
      // Check if data is not empty

      const response = await api.put(`api/admin/forums/${forum}`, data)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }
}

const user = new UserOBJ()
export default user
