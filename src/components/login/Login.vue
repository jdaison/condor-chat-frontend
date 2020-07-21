<template>
  <div class="container">
    <el-row type="flex" ustify="center">
      <el-col :span="8" :offset="8">
        <el-card :body-style="{ padding: '0px' }" shadow="always">
          <div slot="header">
            <el-row>
              <el-col :offset="6"> </el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="8">
                <span>WELCOME</span>
              </el-col>
            </el-row>
          </div>
          <el-row>
            <el-col :span="19" :offset="5">
              <h5>Enter your email address and password</h5>
            </el-col>
          </el-row>
          <el-form
            :model="form"
            status-icon
            :rules="rules"
            ref="form"
            label-width="80px"
            label-position="left"
            size="mini"
          >
            <el-row>
              <el-col :span="15" :offset="5">
                <el-form-item label="email" prop="user">
                  <el-input
                    v-model="form.user"
                    placeholder
                    type="email"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="15" :offset="5">
                <el-form-item label="password" prop="password">
                  <el-input
                    v-model="form.password"
                    placeholder
                    type="password"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :offset="7">
                <el-form-item>
                  <el-button
                    type=""
                    size="mini"
                    plain
                    @click="signInAction(form)"
                    >login</el-button
                  >
                </el-form-item>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center"></el-row>
          </el-form>
          <el-row type="flex" justify="center">
            <el-alert
              v-show="showmessage"
              title="Error"
              type="error"
              v-bind:description="message"
              show-icon
            ></el-alert>
          </el-row>
          <el-row type="flex" justify="center">
            <el-link
              icon="el-icon-document"
              href="https://condorlabs.io/"
              target="_blank"
              rel="noopener"
              >terms</el-link
            >
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./Login.js"></script>
<style scoped>
.el-card {
  margin-top: 40px;
  width: 470px;
  height: 400px;
}
.el-row {
  margin: 1%;
}

.el-button {
  margin-block-start: 5%;
}

span {
  color: rgb(45, 46, 43);
}
</style>
