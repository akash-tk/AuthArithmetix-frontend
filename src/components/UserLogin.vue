<template>
    <div class="login-container">
      <div class="card">
        <h1>Login</h1>
        <form @submit.prevent="login">
          <div class="input-container">
            <input class="input-field" v-model="username" type="text" placeholder="Username" required />
          </div>
          <div class="input-container">
            <input class="input-field" type="password" v-model="password" placeholder="Password" required />
          </div>
          <button class="login-button" type="submit">Login</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://localhost:3000/login', {
            username: this.username,
            password: this.password
          });
          const token = response.data.token;
          window.localStorage.setItem('token', token);
          this.$router.push({ name: 'ArithmeticOperations' });
        } catch (error) {
          console.error(error);
          alert("Login failed. Please check your credentials.");
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to right, #74ebd5, #acb6e5);
  }
  
  .card {
    background: #fff;
    border-radius: 10px;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .input-container {
    margin-bottom: 20px;
  }
  
  .input-field {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  .input-field:focus {
    background-color: #ddd;
    outline: none;
  }
  
  .login-button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: opacity 0.3s ease;
  }
  
  .login-button:hover {
    opacity: 1;
  }
  
  h1 {
    color: #333;
    margin-bottom: 24px;
  }
  </style>