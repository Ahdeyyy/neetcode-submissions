class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const dict = new Map()
        for (const num of nums) {
            if (dict.get(num)) return true
            dict.set(num, true)
        }
        return false
    }
}
