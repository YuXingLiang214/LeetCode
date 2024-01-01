/* 给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。

每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:

0 <= j <= nums[i] 
i + j < n
返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = ({ nums }) => {
  if (nums.length < 2) return 0
  let last = nums.length - 1, i, count = 0
  while (last > 0) {
    for (i = 0; i < last; i++) {
      console.log('检验数：', nums[i] - last + i + 1)
      if (nums[i] > last - i - 1) {
        last = i
        break
      }
    }
    count++
  }
  return count
}

const demo1 = { nums: [2,3,1,1,4] }
const demo2 = { nums: [2,3,0,1,4] }

console.log('result: ', jump({ ...demo1 }))
console.log('result: ', jump({ ...demo2 }))
