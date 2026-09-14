class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const m = new Map<number, boolean>();
        for (let i = 0; i < nums.length; i++) {
            m.set(nums[i], true);
        }

        const e = Array.from(m.keys());
        let l = 0;
        // [2,20,4,10,3,5]
        
        for (let i = 0; i < e.length; i++) {
            // start of sequence
            let n = e[i]
            if (m.get(n - 1) === undefined) {
                let s = 1;
                while (m.get(n + 1) !== undefined) {
                    s++
                    n = n + 1
                }

                if (s > l) l = s
            }
        }

        return l
        
    }
}
