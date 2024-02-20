// import axios from 'react-native-axios'
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";

// const token=AsyncStorage.getItem('stmToken')

// const instance = axios.create({
//     baseURL: 'https://test.acpt.lk/api',
//     headers:{Authorization:`Bearer ${(token)}`}

// });

// export default instance;




import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

let cachedToken = null;

const instance = axios.create({
  baseURL: 'https://test.acpt.lk/api',
  headers: {
    Authorization: cachedToken ? `Bearer ${cachedToken}` : ''
  }
});

instance.interceptors.request.use(
  async config => {
    try {
      const token = await AsyncStorage.getItem('stmToken');
      cachedToken = token;
      config.headers.Authorization = `Bearer ${cachedToken}`;
      console.log("Token " + cachedToken);
    } catch (error) {
      // Handle AsyncStorage errors
    }
    return config;
  },
  error => {
    // Handle request errors
    return Promise.reject(error);
  }
);

export default instance;














// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";

// // Get the token asynchronously
// const getToken = async () => {
//     try {
//         const token = await AsyncStorage.getItem('stmToken');
//         return token;
//     } catch (error) {
//         console.error("Error retrieving token:", error);
//         return null;
//     }
// }

// const instance = axios.create({
//     baseURL: 'https://test.acpt.lk/api',
//     // Use an async function to set the Authorization header
//     headers: async () => ({
//         Authorization: `Bearer ${await getToken()}`
//     })
// });

// export default instance;

