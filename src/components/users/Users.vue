<template>
  <div>
    <el-input
      placeholder="Search users"
      suffix-icon="el-icon-search"
      v-model="inputUser"
    >
    </el-input>
    <ul v-for="user in getArrayUsers" :key="user._id">
      <li>{{ user.user }}</li>
    </ul>
  </div>
</template>

<script src="./Users.js"></script>

<style src="./Users.scss" lang="scss"></style>
