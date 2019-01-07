<template>
  <div id="app">
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%'}">
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"><img src="./assets/logo.png" alt=""></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                          <router-link to="/"><Icon type="ios-navigate"></Icon>home</router-link>
                        </MenuItem>
                        <MenuItem name="2">
                            <router-link to="/menuOne"><Icon type="ios-keypad"></Icon>menuOne</router-link>
                        </MenuItem>
                        <MenuItem name="3">
                            <router-link to="/menuTwo"><Icon type="ios-analytics"></Icon>menuTwo</router-link>
                        </MenuItem>
                        <MenuItem name="4">
                            <router-link to="/menuThree"><Icon type="ios-paper"></Icon>menuThree</router-link>
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
                <div>
                  <router-view></router-view>
                </div>
            </Content>
            <Footer class="layout-footer-center">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</Footer>
        </Layout>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 70px;
    height: 70px;
    background: #5b6270;
    border-radius: 50%;
    float: right;
    position: relative;
    top: 15px;
    padding: 14px
}
.layout-logo img {
  display: block;
  width: 100%;
  height: 100%
}
.layout-nav{
    width: 540px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
.ivu-menu-item a {
  color: #f5f7f9
} 
</style>
