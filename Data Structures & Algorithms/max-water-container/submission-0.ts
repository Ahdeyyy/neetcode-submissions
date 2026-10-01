class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l = 0
        let r = heights.length - 1
        let max = -1

        while (l < r) {
            let h = Math.min(heights[l], heights[r])
            let area = (r - l) * h
            max = Math.max(max, area)

            if (heights[l] > heights[r]) {
                r--
            } else {
                l++
            }
        }

        return max

    }
}
