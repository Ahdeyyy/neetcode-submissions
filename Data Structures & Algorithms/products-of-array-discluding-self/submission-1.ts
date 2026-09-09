class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const r = new Array(nums.length)
        const p = new Array(nums.length)
        const s = new Array(nums.length)

        p[0] = 1
        for (let i = 1; i < nums.length; i++) {
            p[i] = p[i-1] * nums[i-1]
        }

        s[nums.length - 1] = 1
        for (let i = nums.length - 2; i >= 0; i--) {
            s[i] = s[i+1] * nums[i+1]
        }

        for (let i = 0; i < nums.length; i++) {
            r[i] = s[i] * p[i]
        }
        return r
    }
}
