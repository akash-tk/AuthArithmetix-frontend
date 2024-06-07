<template>
    <div class="operations-container">
      <div class="card">
        <h1>Arithmetic Operations</h1>
        <div class="input-group">
          <input type="number" v-model.number="number1" placeholder="Enter first number" />
          <input type="number" v-model.number="number2" placeholder="Enter second number" />
        </div>
        <div class="button-group">
          <button @click="performOperation('add')">Add</button>
          <button @click="performOperation('subtract')">Subtract</button>
          <button @click="performOperation('multiply')">Multiply</button>
          <button @click="performOperation('divide')">Divide</button>
        </div>
        <div v-if="result !== null" class="result-display">
          <h2>Result: {{ result }}</h2>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        number1: null,
        number2: null,
        result: null,
      };
    },
    methods: {
      async performOperation(operation) {
        this.result = null;
        if (operation === 'divide' && this.number2 === 0) {
          this.result = 'Cannot divide by zero';
          return;
        }
        if (this.number1 !== null && this.number2 !== null) {
          try {
            const response = await axios.get(`http://localhost:3000/${operation}`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
              params: {
                number1: this.number1,
                number2: this.number2,
              }
            });
            this.result = response.data.result;
          } catch (error) {
            this.result = error.response && error.response.data.error ? error.response.data.error : 'Operation failed';
            console.error(error);
          }
        } else {
          alert('Please enter both numbers.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .operations-container {
    text-align: center;
    margin: 0 auto;
    max-width: 500px;
  }
  
  .card {
    margin: 20px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .input-group, .button-group {
    margin: 10px 0;
  }
  
  input[type="number"] {
    padding: 8px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    margin: 10px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .result-display {
    margin-top: 20px;
  }
  
  </style>