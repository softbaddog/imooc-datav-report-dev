<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <total-sales></total-sales>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-orders></total-orders>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <today-users></today-users>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-users></total-users>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from '../../statics/TotalSales'
import TotalOrders from '../../statics/TotalOrders'
import TodayUsers from '../../statics/TodayUsers'
import TotalUsers from '../../statics/TotalUsers'
export default {
  name: 'index',
  components: {
    TotalSales,
    TotalOrders,
    TodayUsers,
    TotalUsers
  }
}
</script>

<style scoped>

</style>
