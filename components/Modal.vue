<template>
    <div class="modal-overlay" @click.self="$emit('close-modal')">
      <div class="modal" >
        <h6>Спасибо за коннект!</h6>
        <p>С вами свяжется консультант</p>
        <button class="button" @click="$emit('close-modal')">Закрыть</button>
      </div>
    </div>
  </template>
  
  <script setup>

  </script>


  <style scoped>

  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000da;
    z-index: 999;
    
  }
  
  .modal {
    text-align: center;
    background-color: var(--main-blue-color);
    padding: 60px 60px;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    gap:32px
  }
  .close {
    margin: 10% 0 0 16px;
    cursor: pointer;
  }
  
  .close-img {
    width: 25px;
  }
  
  .check {
    width: 150px;
  }
  
  h6 {
    font-weight: 500;
    font-size: 28px;
    /* margin: 20px 0; */
  }

  .button{
    margin-top: 32px;
  }
  

  

  </style>
  