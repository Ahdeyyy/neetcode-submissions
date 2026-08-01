class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const dict = new Map()
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i]
            if (dict.get(num) !== undefined) {
                
                return [dict.get(num), i]
            }
            
            dict.set(target-num, i)
        }
    }
}
