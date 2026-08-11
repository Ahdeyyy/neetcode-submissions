class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let l = 0
        let r = s.length - 1

        while (l <= r) {
            let l_str = s[l].toLowerCase()
            let r_str = s[r].toLowerCase()
            // check if l or r are alpha num if not continue
            const alpha_num_l = l_str.match("[a-zA-Z0-9]")
            const alpha_num_r = r_str.match("[a-zA-Z0-9]")

            if (!alpha_num_l) {
                l++
                continue
            }
            if (!alpha_num_r) {
                r--
                continue
            }

            if (l_str !== r_str) {
                console.log(l_str, r_str)
                return false
            }
            l++
            r-- 

        }

        return true
    }
}
